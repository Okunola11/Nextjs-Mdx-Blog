"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 86400;

const content = [
  {
    title: "Projects",
    description:
      "Explore my Projects section, featuring handpicked gems showcasing my passion and expertise. From design to development, each piece reflects dedication. Join me on this journey through my best creations",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Projects by Okunola
      </div>
    ),
  },
  {
    title: "Al Amin School",
    description: (
      <>
        <p>
          This application is a robust platform tailored for efficient
          management of student and employee data within educational
          institutions. It offers user-friendly interfaces for public
          information dissemination and secure portals for students and staff.
          Additionally, it facilitates grade calculation and academic assessment
          based on teacher input, ensuring a comprehensive experience.
        </p>
        <p className="text-sm">
          Tech Stack: ReactJS | NodeJS | ExpressJS | MongoDB | CSS
        </p>
        <p className="text-sm">
          Live at:{" "}
          <Link
            className="no-underline text-black bg-white border border-solid border-white rounded-xl p-1 shadow-xl"
            href="https://al-amin.onrender.com/"
            target="_blank"
          >
            Al Amin
          </Link>
        </p>
      </>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/al-amin-home.png"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="Al Amin"
        />
      </div>
    ),
  },
  {
    title: "Chun L. techNotes",
    description: (
      <>
        <p>
          This is an app designed to streamline job management for repair shops
          by providing a comprehensive ticketing system. With this app, repair
          shop owners and employees can easily issue, track, and manage tickets
          for every job, ensuring efficient workflow and organization.
        </p>
        <p className="text-sm">
          Tech Stack: ReactJS | NodeJS | ExpressJS | MongoDB| CSS
        </p>
        <p className="text-sm">
          Live at:{" "}
          <Link
            className="no-underline text-black bg-white border border-solid border-white rounded-xl p-1 shadow-xl"
            href="https://ticketingnotes.onrender.com/"
            target="_blank"
          >
            Chun L. Notes
          </Link>
        </p>
      </>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/techNotes-home.png"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="Chun L. techNotes"
        />
      </div>
    ),
  },
  {
    title: "Acme Rockets",
    description: (
      <>
        <p>
          The Acme Rockets project was crafted as my debut exploration with
          Tailwind CSS. It served as a flex project, demonstrating my adeptness
          in crafting responsive user interfaces tailored for diverse screen
          sizes. This endeavor showcases my commitment to mastering modern
          design tools and techniques.
        </p>
        <p className="text-sm">Tech Stack: HTML | Tailwind CSS | JavaScript</p>
        <p className="text-sm">
          Live at:{" "}
          <Link
            className="no-underline text-black bg-white border border-solid border-white rounded-xl p-1 shadow-xl"
            href="https://visit-space.onrender.com/"
            target="_blank"
          >
            Acme Rockets
          </Link>
        </p>
      </>
    ),
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/acme-home.png"
          width={300}
          height={300}
          className="h-full w-full object-contain"
          alt="Acme Rockets."
        />
      </div>
    ),
  },
];
export default function StickyScrollRevealDemo() {
  return (
    <div className="p-2 md:p-10 scrollbar-hidden flex items-center justify-center h-screen font-mono">
      <StickyScroll content={content} />
    </div>
  );
}
