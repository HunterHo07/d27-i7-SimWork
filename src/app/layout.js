import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
const apiUrl = process.env.SIMWORK_API_URL;

// Environment check
if (!apiUrl) {
  throw new Error();
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SimWork - Future of Work Simulation Platform",
  description: "SimWork is an AI-driven, immersive 'future of work' game that combines real-world tasks with adaptive difficulty, OCR-enabled asset submission, and real-time analytics.",
  keywords: "workplace simulation, training platform, hiring assessment, skill development, AI training",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-white`}
      >
        <Navbar />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
