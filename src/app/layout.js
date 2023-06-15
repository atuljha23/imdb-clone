import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMdB",
  description: "IMdb Clone using Next.js and Tailwind.css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          {/* SearchBox */}
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
