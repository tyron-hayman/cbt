import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head'
import "./styles/reset.css";
import "./styles/globals.css";
import "./styles/global/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LossAlamos" + " | " + "Online Mood Diary and Mental Health Resrouce",
  description: "LossAlamos is an online mood diary and mental health resrouce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />
      </Head>
      <body className={`${inter.className} antialiased subpixel-antialiased`}>{children}</body>
    </html>
  );
}
