import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar"; // Import the Navbar

export const metadata: Metadata = {
  title: "Yrevash Portfolio",
  description: "Neobrutalism Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Add Navbar here */}
        {children}
      </body>
    </html>
  );
}