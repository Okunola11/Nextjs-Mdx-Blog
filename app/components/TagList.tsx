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
      className="no-underline font-light shadow border border-solid border-gray-950 rounded-lg dark:border-gray-300 px-4"
      key={i}
      href={`/tags/${tag}`}
    >
      {tag}
    </Link>
  ));

  return (
    <div>
      <p className="font-bold">Reading tailored for you</p>
      <div className="flex flex-row flex-wrap gap-4 p-2 pt-0">{tags}</div>
    </div>
  );
}
