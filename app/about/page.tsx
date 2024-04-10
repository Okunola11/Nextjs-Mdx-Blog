import MyProfilePic from "../components/MyProfilePic";

export const revalidate = 86400;

export default function About() {
  return (
    <div className="h-screen px-4 md:px-6 max-w-[800px] mx-auto font-mono">
      <MyProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello, welcome 👋&nbsp;to my blog!
        <br />
        It's a pleasure to have you here.{" "}
        <span className="whitespace-nowrap font-bold">
          I'm Okunola Abdulwasiu
        </span>{" "}
        and I'm excited to embark on this journey of sharing insights,
        experiences, and knowledge with you.
      </p>
    </div>
  );
}
