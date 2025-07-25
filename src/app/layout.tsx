import type { Metadata } from "next";
import { grotesk, proxima } from "../fonts/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "SN25 Dashboard",
  description: "Frontend Tech Test at Macrocosmos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${grotesk.variable} ${proxima.variable} h-full w-full bg-black font-proxima tracking-wider text-white`}
      >
        {children}
      </body>
    </html>
  );
}
