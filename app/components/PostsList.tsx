import Link from "next/link";
import getFormattedDates from "@/lib/getFormattedDates";

type Props = {
  post: Meta;
};
export default function PostsList({ post }: Props) {
  const { id, title, date } = post;

  const formattedDate = getFormattedDates(date);

  return (
    <>
      {/* <li className="mt-4 text-2xl dark:text-white/90">
        <Link
          className="underline hover:text-black/70 dark:hover:text-white"
          href={`/posts/${id}`}
        >
          {title}
        </Link>
        <br />
        <p className="text-sm mt-1">{formattedDate}</p>
      </li> */}

      <li className="mt-4">
        <Link
          href={`/posts/${id}`}
          className="block text-xl font-medium dark:text-white hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
        >
          {title}
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {formattedDate}
        </p>
      </li>
    </>
  );
}
