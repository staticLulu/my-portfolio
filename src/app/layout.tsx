import type { Metadata } from "next";
import "./globals.css";
import AppBar from "./components/AppBar";
import { Poppins } from 'next/font/google'


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800']
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
      <body>
        <AppBar/>
        {children} 
      </body>
    </html>
  );
}
