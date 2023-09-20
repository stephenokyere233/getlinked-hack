import MainLayout from "@/layout/main.layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const clash = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/fonts/ClashDisplay-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/ClashDisplay-Extralight.otf",
      weight: "200",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --clash-font: ${clash.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
