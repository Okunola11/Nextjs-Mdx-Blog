import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";

export const revalidate = 86400;

export default function Home() {
  return (
    <div className="mx-auto">
      <MyProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello, welcome 👋&nbsp;to my blog!
        <br />
        It's a pleasure to have you here.{" "}
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Waasi</span>
        </span>{" "}
        and I'm excited to embark on this journey of sharing insights,
        experiences, and knowledge with you.
      </p>
      <Posts />
    </div>
  );
}
