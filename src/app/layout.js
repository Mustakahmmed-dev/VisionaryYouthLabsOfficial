import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/footer";

export const metadata = {
  title: "Visionary Youth Labs",
  icons: {
    icon: '/VisionaryYouthLabsLogo.png'
  },
  description: "The Leading tech company serving global clients based in Rohingya refugee camp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}

      <Footer></Footer>
      </body>
    </html>
  );
}
