import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "QiXing Au Pair - 启星国际",
  description: `QiXing Au Pair is an international agency based in Shenzhen,
    China, dedicated to promoting cultural exchange between China and
    the rest of the world.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
