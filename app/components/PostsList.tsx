"use client";

import Image from "next/image";
import { useState } from "react";
import getFormattedDates from "@/lib/getFormattedDates";

type Props = {
  post: Meta;
};

export default function PostsList({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDates(date);
  const [imageError, setImageError] = useState(false);

  return (
    <article className="w-full flex flex-row-reverse m-0 p-0">
      <div className="w-1/4">
        {imageError ? (
          <Image
            alt={`${id} Image`}
            width={200}
            height={200}
            src="/images/name-badge.png" // Provide the path to your fallback image here
            className="rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />
        ) : (
          <Image
            alt="Author"
            width={200}
            height={200}
            src={`https://raw.githubusercontent.com/okunola11/blogPosts-test/main/images/${id}.png`}
            onError={() => setImageError(true)} // Handle image load error
            className="rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
          />
        )}
      </div>

      <div className="p-4 w-3/4 flex-grow mr-4">
        <a href="#">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            {title}
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>

        <p className="block text-xs text-gray-500 dark:text-gray-400">
          {formattedDate}
        </p>
      </div>
    </article>
  );
}
