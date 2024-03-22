import { getPostsMeta, getPostByName } from "@/lib/post";
import getFormattedDates from "@/lib/getFormattedDates";
import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";

export const revalidate = 10; // it's like setting cache to no-cache

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); // deduped: all server-side fetches will be deduped by next

  if (!posts) {
    return [];
  }

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { postId: string };
}) {
  const { postId } = params;

  const post = await getPostByName(`${postId}.mdx`); // next will dedupe the data

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); // next.js will de-dupe the data

  if (!post) notFound();

  const { meta, content } = post;

  const formattedDate = getFormattedDates(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <>
      <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
      <p className="mt-0 text-sm">{formattedDate}</p>
      <article>{content}</article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">{tags}</div>
        <p className="mb-10">
          <Link href="/">← Back to home</Link>
        </p>
      </section>
    </>
  );
}

// can be done this way too instead of defining the Props differently.
/* export function Data({params}: {params: {postId: string}}) {
const {postId} = params
// More codes
} */
