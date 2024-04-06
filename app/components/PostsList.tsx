import React from "react";
import Link from "next/link";
import getFormattedDates from "@/lib/getFormattedDates";
import { getPostByName } from "@/lib/post";
import { notFound } from "next/navigation";

type Props = {
  post: Meta;
};
export default async function PostsList({ post }: Props) {
  const { id, title, date } = post;

  const individualPost = await getPostByName(`${id}.mdx`);

  if (!individualPost) {
    return <p>.....</p>;
  }

  const { content } = individualPost;

  //const mdxContent = getHtmlContent(content);
  //const reactContent = <p>{content}</p>;

  /* const extractedText = React.Children.toArray(reactContent.props.children)
    .filter((child) => typeof child === "string")
    .join(" ")
    .split(" ")
    .slice(0, 20)
    .join(" ");
 */
  //const paragraphContent = <p>{content}</p>
  //const displayContent = paragraphContent.split(" ");
  //const firstTenWords = displayContent.slice(0, 10);
  //const intro = firstTenWords.join(" ");

  const formattedDate = getFormattedDates(date);

  async function getImages(): Promise<String> {
    const postImage = await fetch(
      `https://raw.githubusercontent.com/okunola11/blogPosts-test/main/images/${id}.png`
    );
    const image = postImage
      ? `https://raw.githubusercontent.com/okunola11/blogPosts-test/main/images/${id}.png`
      : "/images/name-badge.png";
    return image;
  }

  const src =
    `https://raw.githubusercontent.com/okunola11/blogPosts-test/main/images/${id}.png` ??
    "/images/name-badge.png";
  console.log(src);

  return (
    <>
      {/* <li className="mt-4">
        <Link
          href={`/posts/${id}`}
          className="block text-xl font-medium dark:text-white hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
        >
          {title}
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {formattedDate}
        </p>
      </li> */}

      {/*  <li
        className="overflow-hidden border border-solid rounded-2xl border-gray-700 dark:border-white
      shadow transition hover:shadow-lg dark:shadow-gray-700/25 mb-8"
      >
        <img
          alt={id}
          src={`https://raw.githubusercontent.com/okunola11/blogPosts-test/main/images/${id}.png`}
          className=" w-full h-full object-cover border rounded-2xl border-solid border-white"
        />

        <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
          <time className="block text-xs text-gray-500 dark:text-gray-400">
            {formattedDate}
          </time>

          <Link href="#">
            <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
              {title}
            </h3>
          </Link>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            we put some content here.
          </p>
        </div>
      </li> */}

      {/* <li className="overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25 w-2/3">
        <img
          alt=""
          width={500}
          height={500}
          src={`https://raw.githubusercontent.com/okunola11/blogPosts-test/main/images/${id}.png`}
          className="w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
          <p className="block text-xs text-gray-500 dark:text-gray-400">
            10th Oct 2022
          </p>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
              {title}
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </li> */}

      <article className="w-full flex flex-row-reverse">
        <img
          alt=""
          width={200}
          height={200}
          src={src}
          className="rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] dark:shadow-gray-700/25"
        />

        <div className="p-4 flex-grow">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              {title}
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>

          <p className="block text-xs text-gray-500 dark:text-gray-400">
            {formattedDate}
          </p>
        </div>
      </article>
    </>
  );
}
