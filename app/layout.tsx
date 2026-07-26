import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ask Teacher | Learn maths together",
  description: "A family learning platform for curious young minds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
