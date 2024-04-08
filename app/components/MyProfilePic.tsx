import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-gray-500 dark:border-blue-700/50 shadow-lg drop-shadow-xl shadow-black rounded-full mx-auto"
        src="/images/waasi.jpg"
        alt="Waasi Okunola"
        width={200}
        height={200}
        priority={true}
      />
    </section>
  );
}
