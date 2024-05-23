"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <header className="bg-white dark:bg-gradient-to-tr from-gray-900 via-blue-900 to-gray-900 p-1 sticky top-0 drop-shadow-xl z-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex gap-2 items-center md:gap-4">
              <Link className="text-gray-500 dark:text-white" href="/about">
                <span className="sr-only">Okunola Abdulwasiu</span>
                <Avatar>
                  <AvatarImage src="/images/waasi2.jpg" />
                  <AvatarFallback>OA</AvatarFallback>
                </Avatar>
              </Link>
              <h1 className="text-gray-900 dark:text-white font-bold text-xl hidden md:block">
                <Link href="/">Waasi Blog</Link>
              </h1>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="text-gray-900 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 text-lg z-5"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-900 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 text-lg z-5"
                      href="/trending"
                    >
                      Trending
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-900 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 text-lg z-5"
                      href="/about"
                    >
                      About me
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center justify-center gap-3 md:gap-6">
              <Link
                className="text-gray-800 dark:text-gray-200 text-3xl md:hidden"
                href="/"
              >
                <HomeRoundedIcon style={{ fontSize: 30 }} />
              </Link>
              <Link
                className="text-gray-800 dark:text-gray-200 text-xl"
                href="https://twitter.com/AbdulAyo4"
                target="_blank"
              >
                <XIcon />
              </Link>
              <Link
                className="text-gray-800 dark:text-gray-200 text-xl"
                href="https://github.com/okunola11"
                target="_blank"
              >
                <GitHubIcon />
              </Link>
              <Link
                className="text-gray-800 dark:text-gray-200 text-xl"
                href="https://www.linkedin.com/in/waas"
                target="_blank"
              >
                <LinkedInIcon />
              </Link>
              <button
                className="text-gray-800 dark:text-gray-200 text-xl"
                onClick={toggleDarkMode}
              >
                {isDarkMode ? (
                  <LightModeOutlinedIcon />
                ) : (
                  <DarkModeTwoToneIcon />
                )}
              </button>
            </div>

            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center md:hidden"
            >
              <span
                className={`bg-gray-800 dark:bg-gray-200 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isActive ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
              ></span>
              <span
                className={`bg-gray-800 dark:bg-gray-200 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
              ></span>
              <span
                className={`bg-gray-800 dark:bg-gray-200 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isActive ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
              ></span>
            </button>
          </div>
        </div>
        <nav
          id="menu"
          className={`bg-[#000e1f]/50 text-center w-full transition duration-300 ease-in-out ${
            isActive ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 p-4 gap-2">
            <li>
              <Link
                href="/"
                className="text-white hover:text-gray-300 py-2 px-4"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/trending"
                className="text-white hover:text-gray-300 py-2 px-4"
              >
                Trending
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-white hover:text-gray-300 py-2 px-4"
              >
                About the Author
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
