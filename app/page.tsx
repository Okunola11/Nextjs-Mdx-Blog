import Posts from "./components/Posts";

export const revalidate = 0;

export default function Home() {
  return (
    <div className="mx-auto">
      <Posts />
    </div>
  );
}
