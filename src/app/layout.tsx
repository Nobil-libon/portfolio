import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAFAF7",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Nobil S. — AI & Data Science Student | Aspiring AI/ML Engineer",
  description:
    "Portfolio of Nobil S., a final-year B.Tech Artificial Intelligence and Data Science student (CGPA: 8.05). Building practical solutions with Machine Learning, NLP, and Generative AI.",
  keywords: [
    "Nobil S.",
    "AI & Data Science Student",
    "Aspiring AI/ML Engineer",
    "Machine Learning",
    "NLP",
    "Generative AI",
    "BERT",
    "PyTorch",
    "RAG",
    "pgvector",
    "Python",
    "FastAPI",
    "Portfolio",
  ],
  authors: [{ name: "Nobil S.", url: "https://github.com/Nobil-libon" }],
  creator: "Nobil S.",
  openGraph: {
    title: "Nobil S. — AI & Data Science Student | Aspiring AI/ML Engineer",
    description:
      "Building practical solutions with Machine Learning and AI. Final-year B.Tech AI & Data Science student.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nobil S. — AI & Data Science Student | Aspiring AI/ML Engineer",
    description:
      "Building practical solutions with Machine Learning and AI. Final-year B.Tech AI & Data Science student.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-full antialiased selection:bg-[#EBF5F0] selection:text-[#165B33]">
        {children}
      </body>
    </html>
  );
}
