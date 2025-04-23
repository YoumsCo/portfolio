import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { MoonLoader } from "react-spinners";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Youms's portfolio",
  description: "Portfolio créé par le développeur web Youmbi Le-duc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  console.groupCollapsed("Dev infos");
  console.log("Name: Youmbi Le-duc");
  console.log("Email: youmschoco@gmail.com | youmsc.co@gmail.com");
  console.groupEnd();


  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/icons/user.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={
          <MoonLoader
            color="white"
            loading={true}
            size={70}
            aria-label="Chargement du Spinner"
            data-testid="loader"
          />
        }>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
