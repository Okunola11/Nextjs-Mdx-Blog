import { getPostsMeta } from "@/lib/post";
import PostsList from "@/app/components/PostsList";
import Link from "next/link";

export const revalidate = 86400;

type Props = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); // de-duped

  if (!posts) return [];

  const tags = new Set(posts.map((post) => post.tags).flat()); // each post tag is an Array of its own, flat flattens
  // out the array into one (we have arrays of arrays when we call map). we call new Set() to remove duplicates

  return Array.from(tags).map((tag) => ({ tag })); // this creates an array of objects
}

export async function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Posts about ${tag}`,
  };
}

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostsMeta(); // deduped again

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available</p>;
  }

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="mt-10">Sorry, no posts for that keyword.</p>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-6 min-h-screen">
      <h2 className="text-3xl mt-4 mb-0">Results for: #{tag}</h2>
      <section className="mt-6 mx-auto max-w-2xl">
        <ul className="w-full list-none p-0">
          {tagPosts.map((post) => (
            <PostsList key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </div>
  );
}
