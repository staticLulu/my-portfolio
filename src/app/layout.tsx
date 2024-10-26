import type { Metadata } from "next";
import "./globals.css";
import AppBar from "./components/AppBar";
import { Poppins } from "next/font/google";
import Footer from './components/Footer';
import { Box } from "@mui/material";


const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "My portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className={`dark:bg-slate-800`} suppressHydrationWarning>
        <Box className="xs:w-full xl:w-[1280px] xl:m-auto xs:px-4 xl:px-0">
          <AppBar />
        </Box>
        {children} 
        <Footer />
      </body>
    </html>
  );
}
