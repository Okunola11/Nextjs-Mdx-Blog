"use client";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";

type Props = {
  tag: string;
};

export default function TrendingList({ tag }: Props) {
  return (
    <li>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 min-w-[100px]"
      >
        <Link className="no-underline" href={`/tags/${tag}`}>
          # {tag}
        </Link>
      </HoverBorderGradient>
    </li>
  );
}
