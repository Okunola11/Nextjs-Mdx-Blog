import React from "react";
import Link from "next/link";

type Props = {
  allTags: string[][];
};

export default function TagList({ allTags }: Props) {
  const flattenedArray = allTags.flat();

  const tagsArray = [...new Set(flattenedArray)];

  const tags = tagsArray.map((tag, i) => (
    <Link
      className="no-underline shadow border border-solid border-gray-950 rounded-lg dark:border-gray-300 px-4"
      key={i}
      href={`/tags/${tag}`}
    >
      {tag}
    </Link>
  ));

  return (
    <div>
      <h3>Reading tailored for you</h3>
      <div className="flex flex-row flex-wrap gap-4 p-2">{tags}</div>
    </div>
  );
}
