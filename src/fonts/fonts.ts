import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

export const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});

export const proxima = localFont({
  src: [
    {
      path: "./ProximaNova/ProximaNovaT-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./ProximaNova/ProximaNovaA-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./ProximaNova/ProximaNova-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./ProximaNova/ProximaNova-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./ProximaNova/ProximaNova-Black.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-proxima",
});
