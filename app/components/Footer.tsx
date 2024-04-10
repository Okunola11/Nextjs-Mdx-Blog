import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";

const currentYear = new Date().getFullYear();

export default function Footer() {
  //bg-gradient-to-b from-purple via-slate-900 to-black
  return (
    <footer className="bg-gradient-to-b from-[#ef4444] via-[#fb923c] to-black">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-white">Waasi's Blog</div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-black">
          Embrace the journey of innovation, fueled by passion, driven by
          curiosity, and illuminated by the pursuit of knowledge
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <Link
              className="transition text-white hover:text-white/75"
              href="/about"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              className="transition text-white hover:text-white/75"
              href="/trending"
            >
              Trending
            </Link>
          </li>

          <li>
            <Link
              className="transition text-white hover:text-white/75"
              href="#"
            >
              Contact
            </Link>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <Link
              href="https://www.linkedin.com/in/waas"
              rel="noreferrer"
              target="_blank"
              className="transition text-white hover:text-white/75"
            >
              <span className="sr-only">LinkedIn</span>
              <LinkedInIcon />
            </Link>
          </li>

          <li>
            <Link
              href="https://twitter.com/AbdulAyo4"
              rel="noreferrer"
              target="_blank"
              className="transition text-white hover:text-white/75"
            >
              <span className="sr-only">X</span>
              <XIcon />
            </Link>
          </li>

          <li>
            <Link
              href="https://github.com/okunola11"
              rel="noreferrer"
              target="_blank"
              className="transition text-white hover:text-white/75"
            >
              <span className="sr-only">GitHub</span>
              <GitHubIcon />
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-center text-sm text-white/75">
        &copy; {currentYear} Designed by Abdulwasiu Okunola.
      </div>
    </footer>
  );
}
