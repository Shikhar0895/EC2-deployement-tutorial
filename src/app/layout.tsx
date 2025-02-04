import type { Metadata } from "next";
import { Heebo, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import cn from "@/lib/utils";
import HeroBlur from "@/components/ui/HeroBlur";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      id="html"
      className=" flex justify-center w-screen h-screen"
    >
      <body
        className={cn(
          ` ${poppins.variable}  ${roboto.variable}  min-w-[90%] min-h-[90%] p-4 dark:bg-background-700 dark:text-text-700 bg-background-50 text-text-900`
        )}
      >
        <HeroBlur />
        {children}
      </body>
    </html>
  );
}
