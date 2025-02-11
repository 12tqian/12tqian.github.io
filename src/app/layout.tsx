import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Providers } from "./providers";
import { PageWrapper } from "./components/PageWrapper";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timothy Qian",
  description: "Timothy Qian's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans bg-white`}>
        <Providers>
          <div className="flex flex-col min-h-screen items-center p-4 pt-8">
            <div className="max-w-3xl w-full flex flex-col space-between items-center">
              <Header />
              {/* {children} */}
              <PageWrapper children={children} />
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
