import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head';
import { AuthContextProvider } from './context/AuthContext'
import "./styles/reset.css";
import "./styles/globals.css";
import "./styles/global/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets : ['latin'],
  variable: '--fonts-poppins',
  weight : ['100', '300', '400', '800'],
  display : 'swap'
});

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
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <body className={`${inter.className} ${poppins.variable} antialiased subpixel-antialiased`}><AuthContextProvider>{children}</AuthContextProvider></body>
    </html>
  );
}
