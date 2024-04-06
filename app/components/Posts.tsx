import { getPostsMeta } from "@/lib/post";
import PostsList from "./PostsList";
import Link from "next/link";
import TagList from "./TagList";

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
      <section className="h-screen bg-white"></section>

      <section className="grid grid-cols-3 relative p-0 m-0">
        <ul className="col-span-2 pt-16 max-w-2xl">
          {posts.map((post) => (
            <PostsList key={post.id} post={post} />
          ))}
        </ul>
        <div
          className="col-span-1 sticky top-0 h-vh-minus-68 overflow-hidden pt-16"
          style={{ left: "calc(100% - 2/3)" }}
        >
          <TagList allTags={allTags} />
        </div>
      </section>
    </>
  );
}
