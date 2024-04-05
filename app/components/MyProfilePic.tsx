import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-black dark:border-slate-500 shadow-lg drop-shadow-xl shadow-black rounded-full mx-auto"
        src="/images/waasi.jpg"
        alt="Waasi Okunola"
        width={50}
        height={50}
        priority={true}
      />
    </section>
  );
}
