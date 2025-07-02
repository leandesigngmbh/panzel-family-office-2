import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmootherContainer from "@/components/atoms/SmootherContainer";
import Nav from "@/components/organisms/Nav";
import Providers from "@/components/molecules/Providers";

const suisseIntl = localFont({
  src: [
    {
      path: "../../public/fonts/SuisseIntlTrial-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/SuisseIntlTrial-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/SuisseIntlTrial-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/SuisseIntlTrial-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-primary",
});

const ot2049 = localFont({
  src: "../../public/fonts/OT2049-Regular.woff2",
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Panzel Family Office",
  description: "Create value for generations to come",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${suisseIntl.variable} ${ot2049.variable} font-normal font-primary subpixel-antialiased tracking-tight`}
      >
        <Providers>
          <Nav />

          {/* <SmootherContainer> */}
          <div>{children}</div>
          {/* </SmootherContainer> */}
        </Providers>
      </body>
    </html>
  );
}
