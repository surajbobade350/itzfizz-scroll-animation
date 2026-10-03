import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Itzfizz — Digital Experience",
  description:
    "Scroll-driven hero animation built for the Itzfizz web development internship assignment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}