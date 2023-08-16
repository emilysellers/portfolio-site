import { getPages } from "@/sanity/sanity-utils";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emily Sellers",
  description: "Generated by Next + Sanity",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //get all of my pages
  const pages = await getPages();
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header className="p-5">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            ES
          </Link>
          <div>
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`}>
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  );
}
