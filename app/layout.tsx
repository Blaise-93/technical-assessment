import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  weight: "100 900",
});
const interSans = localFont({
  src: "./fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "E-Academy Assessment",
  description:
    "E-Academy Frontend Assessment using Figma design to create a user experience website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${interSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
