import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Subnav from "./components/Subnav";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "HOB Lawal Foundation",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={montserrat.className}>
        <Subnav />
        <Navbar />

        <div>

        {children}
          </div>
          <Footer />
          </body>
    </html>
  );
}
