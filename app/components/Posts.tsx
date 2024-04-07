import { getPostsMeta } from "@/lib/post";
import PostsList from "./PostsList";
import Link from "next/link";
import TagList from "./TagList";
import SparklesPreview from "./Hero";

export default async function Posts() {
  const posts = await getPostsMeta(); // we dont need to async/await, the data is on localStorage

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  const allTags = posts.map((post) => {
    return post.tags;
  });

  return (
    <>
      {/*  <section className="h-screen flex flex-col-reverse md:flex-row w-full gap-6 top-6">
        <ul className="list-none min-h-screen overflow-y-auto scrollbar-hidden">
          {posts.map((post) => (
            <PostsList key={post.id} post={post} />
          ))}
        </ul>
        <div className="w-3/6 min-h-screen overflow-hidden">
          <div className="h-full">
            <TagList allTags={allTags} />
          </div>
        </div>
      </section>
 */}
      <section className="">
        <SparklesPreview />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 relative p-0 m-0 w-full">
        <ul className="md:col-span-2 order-2 md:order-1 md:pt-16 p-0 md:pl-6 md:max-w-2xl flex flex-col">
          {posts.map((post) => (
            <PostsList key={post.id} post={post} />
          ))}
        </ul>
        <div
          className="md:col-span-1 order-1 md:order-2 md:sticky md:top-0 md:h-vh-minus-68 overflow-hidden md:pt-16"
          style={{ left: "calc(100% - 2/3)" }}
        >
          <TagList allTags={allTags} />
        </div>
      </section>
    </>
  );
}
