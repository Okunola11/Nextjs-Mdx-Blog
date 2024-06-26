import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waasi's Blog",
  description: "Personal blog of Abdulwaasi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-[#000e1f] font-nunito text-base md:text-xl">
        <Header />
        <main className="prose prose-xl prose-slate dark:prose-invert max-w-none mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
