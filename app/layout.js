import { Roboto } from "next/font/google";
import "./styles/home.scss";

const para = Roboto({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata = {
  title: "Jatesh Parikh",
  description: "FullStack Web Developer Portfolio | Jatesh Parikh ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={para.className}>{children}</body>
    </html>
  );
}
