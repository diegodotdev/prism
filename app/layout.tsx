import "./globals.css";
import { Montserrat } from "next/font/google";
import Providers from "./Providers";
import Nav from "./Nav";
import Menu from "./Menu";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "PRISM",
  description: "PRISM, ecommerce shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={montserrat.className}>
          <Nav />
          {children}
          <Menu />
        </body>
      </html>
    </Providers>
  );
}
