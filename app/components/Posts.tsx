import { getSortedPostsData } from "@/lib/post";

export default function Posts() {
  const posts = getSortedPostsData(); // we dont need to async/await, the data is on localStorage

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
    </section>
  );
}
