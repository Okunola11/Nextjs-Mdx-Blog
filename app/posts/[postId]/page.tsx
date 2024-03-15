import { getPostData, getSortedPostsData } from "@/lib/post";
import getFormattedDates from "@/lib/getFormattedDates";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: {
    postId: string;
  };
};

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const { postId } = params;

  const posts = getSortedPostsData(); // next will dedupe the data

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const posts = getSortedPostsData(); // next.js will de-dupe the data

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, contentHtml } = await getPostData(postId);

  const formattedDate = getFormattedDates(date);

  return (
    <main>
      <h1>{title}</h1>
      <p>{formattedDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
      <p>
        <Link href="/">← Back to Home</Link>
      </p>
    </main>
  );
}

// can be done this way too instead of defining the Props differently.
/* export function Data({params}: {params: {postId: string}}) {
const {postId} = params
// More codes
} */
