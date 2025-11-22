import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neel Suthar - Data Analyst | Cloud Engineer | Security Professional",
  description: "Interactive portfolio showcasing cloud, data science, and cybersecurity projects. Expert in AWS, Python, and Security.",
  keywords: ["Data Analyst", "Cloud Engineer", "Cybersecurity", "AWS", "Python", "Machine Learning", "Neel Suthar"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased bg-primary text-white selection:bg-accent selection:text-primary">
        {children}
      </body>
    </html>
  );
}
