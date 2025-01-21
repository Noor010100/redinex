// import localFont from "next/font/local";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";

import { Providers } from "./redux/provider/provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body
      // className={${geistSans.variable} ${geistMono.variable} antialiased}
    >
      <Providers>
        <Navbar />
        {/* <Whatsapp />
        <FormPopup /> */}
        {children}
        <Footer />
        </Providers>
    </body>
  </html>
  );
}