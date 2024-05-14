import type { Metadata } from "next";
import "./globals.css";
import StateProvider from "./StateProvider";

export const metadata: Metadata = {
  title: "Attendance Figma To React",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StateProvider>
      <html lang="en">
        <body className="p-1">{children}</body>
      </html>
    </StateProvider>
  );
}
