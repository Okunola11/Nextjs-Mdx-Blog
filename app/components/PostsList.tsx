"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import getFormattedDates from "@/lib/getFormattedDates";

type Props = {
  post: Meta;
};

export default function PostsList({ post }: Props) {
  const { id, title, date, intro } = post;
  const formattedDate = getFormattedDates(date);
  const [imageError, setImageError] = useState(false);

  return (
    <Link className="no-underline" href={`/posts/${id}`}>
      <li className="w-full flex flex-row-reverse m-0 p-0 border border-white/50 mb-4 rounded-2xl shadow-xl">
        <div className="w-1/4">
          {imageError ? (
            <Image
              alt={`${id} Image`}
              width={200}
              height={200}
              src="/images/name-badge.png" // Fallback image for when the "id" image does not exist
              className="rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25 p-4"
            />
          ) : (
            <Image
              alt="Author"
              width={200}
              height={200}
              src={`https://raw.githubusercontent.com/okunola11/blogPosts-test/main/${id}/${id}.png`}
              onError={() => setImageError(true)} // We handle image load error here
              className="rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25 p-4"
            />
          )}
        </div>

        <div className="p-4 w-3/4 flex-grow mr-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {title}
          </h3>

          <p className="hidden md:block mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            {intro}
          </p>

          <p className="block text-xs text-gray-500 dark:text-gray-400">
            {formattedDate}
          </p>
        </div>
      </li>
    </Link>
  );
}
