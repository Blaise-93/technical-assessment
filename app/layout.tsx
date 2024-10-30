
import "./globals.css";
import {Inter} from "next/font/google"


const inter = Inter({
  subsets:['latin'],
  variable:'--font-inter'
})


export const metadata = {
  title: "E-Academy Assessment",
  description:
    "E-Academy Frontend Assessment using Figma design to create a user experience website.",
  robots: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
