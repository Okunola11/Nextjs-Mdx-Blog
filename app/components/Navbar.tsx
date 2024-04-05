"use client";

import Link from "next/link";
import { FaTwitter, FaGithub, FaLaptop, FaLinkedin } from "react-icons/fa";
import MyProfilePic from "./MyProfilePic";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      {/* <header className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
         <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

        <div className="md:px-6 prose prose-xl mx-auto flex justify-evenly">
          <section>
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
              <Link
                href="/"
                className="text-white/90 no-underline hover:text-white"
              >
                Okunola
              </Link>
            </h1>
          </section>
          <nav className="flex justify-between gap-x-4">
            <Link href="/" className="text-white/90 hover:text-white">
              Home
            </Link>
            <Link href="" className="text-white/90 hover:text-white">
              Trending
            </Link>
            <Link href="/about" className="text-white/90 hover:text-white">
              About me
            </Link>
          </nav>
          <nav className="">
            <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-2xl lg:text-3xl">
              <Link
                className="text-white/90 hover:text-white"
                href="https://www.linkedin.com/in/waas"
              >
                <FaLinkedin />
              </Link>
              <Link
                className="text-white/90 hover:text-white"
                href="https://github.com/okunola11"
              >
                <FaLaptop />
              </Link>
              <Link
                className="text-white/90 hover:text-white"
                href="https://github.com/okunola11"
              >
                <FaGithub />
              </Link>
              <Link
                className="text-white/90 hover:text-white"
                href="https://twitter.com/AbdulAyo4"
              >
                <FaTwitter />
              </Link>
            </div>
          </nav>
        </div>
      </header> */}
      <header className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex gap-2 items-center md:gap-4">
              <a className="text-gray-500 dark:text-white" href="/about">
                <span className="sr-only">Okunola Abdulwasiu</span>
                <MyProfilePic />
              </a>
              <h1 className="text-gray-500 dark:text-white font-bold">
                Okunola
              </h1>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Trending
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      About me
                    </Link>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center md:hidden"
            >
              <span
                className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isActive ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isActive ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
              ></span>
            </button>
          </div>
        </div>
        <nav
          id="menu"
          className={`bg-gray-800 text-center w-full transition duration-300 ease-in-out ${
            isActive ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 p-4">
            <li>
              <a href="#" className="text-white hover:text-gray-300 py-2 px-4">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 py-2 px-4">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300 py-2 px-4">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
