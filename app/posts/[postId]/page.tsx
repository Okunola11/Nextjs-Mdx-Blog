import { getPostsMeta, getPostByName } from "@/lib/post";
import getFormattedDates from "@/lib/getFormattedDates";
import { notFound } from "next/navigation";
import Link from "next/link";
import "highlight.js/styles/github-dark.css";

export const revalidate = 0; // it's like setting cache to no-cache

type Props = {
  params: {
    postId: string;
  };
};

/* export async function generateStaticParams() {
  const posts = await getPostsMeta(); // deduped: all server-side fetches will be deduped by next

  if (!posts) {
    return [];
  }

  return posts.map((post) => ({
    postId: post.id,
  }));
} */

export async function generateMetadata({ params: { postId } }: Props) {
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
    <div className="max-w-2xl mx-auto px-4 md:px-6">
      <h2 className="text-3xl mt-4 mb-0 font-bold">{meta.title}</h2>
      <p className="mt-0 text-sm">{formattedDate}</p>
      <article>{content}</article>
      <section>
        <h3 className="text-xl font-semibold mb-2">Related:</h3>
        <div className="flex flex-row gap-2">{tags}</div>
        <p className="mb-10">
          <Link href="/" className="text-blue-500 hover:underline">
            ← Back to home
          </Link>
        </p>
      </section>
    </div>
  );
}

// can be done this way too instead of defining the Props differently.
/* export function Data({params}: {params: {postId: string}}) {
const {postId} = params
// More codes
} */
