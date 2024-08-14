import type { Metadata } from "next";
import "./globals.css";
import AppBar from "./components/AppBar";
import { Poppins } from 'next/font/google'
import { Box } from "@mui/material";


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
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
    <html lang="en">
      <body className={`${poppins.className} dark:bg-slate-800`}>
        <Box className="xs:w-full xl:w-[1280px] xl:m-auto xs:p-4 xl:p-0">
          <AppBar/>
        </Box>
        {children} 
      </body>
    </html>
  );
}
