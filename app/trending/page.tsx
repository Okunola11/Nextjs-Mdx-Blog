import { getPostsMeta } from "@/lib/post";
import getMostOccurringTags from "@/lib/getTopTags";
import TrendingList from "../components/TrendingList";

export const revalidate = 0;

export default async function Trending() {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p>Oops! No posts available.</p>;
  }

  const allTags = posts.map((post) => {
    return post.tags;
  });

  const flattenedArray = allTags.flat();

  const topTags = getMostOccurringTags(flattenedArray, 5);

  return (
    <div className="text-black dark:text-white p-4 mx-auto max-w-[800px]">
      <p>
        Explore the latest buzz: Dive into the trending topics captivating
        minds.
      </p>
      <ul className="list-none">
        {topTags.map((tag) => (
          <TrendingList key={tag} tag={tag} />
        ))}
      </ul>
    </div>
  );
}
