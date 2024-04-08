"use client";

import Link from "next/link";
import { FaTwitter, FaGithub, FaLaptop, FaLinkedin } from "react-icons/fa";
import MyProfilePic from "./MyProfilePic";
import { useState, useEffect } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";

export default function Navbar() {
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
      {/* <header className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
         <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar> */}

      <header className="bg-white dark:bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 p-1 sticky top-0 drop-shadow-xl z-10">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex gap-2 items-center md:gap-4">
              <a className="text-gray-500 dark:text-white" href="/about">
                <span className="sr-only">Okunola Abdulwasiu</span>
                <MyProfilePic />
              </a>
              <h1 className="text-gray-900 dark:text-white font-bold text-xl">
                Okunola
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
                      href="#"
                    >
                      Trending
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-900 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 text-lg z-5"
                      href="#"
                    >
                      About me
                    </Link>
                  </li>

                  <li>
                    <a
                      className="text-gray-900 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 text-lg"
                      href="#"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex gap-6">
              <Link
                className="text-gray-800 dark:text-gray-200 text-xl"
                href="https://twitter.com/AbdulAyo4"
              >
                <XIcon />
              </Link>
              <Link
                className="text-gray-800 dark:text-gray-200 text-xl"
                href="https://github.com/okunola11"
              >
                <GitHubIcon />
              </Link>
              <Link
                className="text-gray-800 dark:text-gray-200 text-xl"
                href="https://www.linkedin.com/in/waas"
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
