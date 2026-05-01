import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ScrollTrigger from "@/components/ScrollTrigger"; // 👈 NEW
import SmoothReveal from "@/components/SmoothReveal";

export const metadata: Metadata = {
  title: "APPNWEB Technologies",
  description: "We build scalable digital products",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900">

        {/* ✅ CLIENT LOGIC HERE */}
        <ScrollTrigger />
        <SmoothReveal />
        <Navbar />

        <main className="pt-20">
          {children}
        </main>
        <Footer />

      </body>
    </html>
  );
}