import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://azharzuhro.vercel.app"),
  title: {
    default: "Azhar Zuhro | AI Engineer & Machine Learning Engineer",
    template: "%s | Azhar Zuhro",
  },
  description:
    "Personal portfolio of Azhar Zuhro, AI and Machine Learning Engineer specializing in predictive ML (LightGBM, XGBoost), Generative AI & RAG, acoustic deep learning, and production FastAPI microservices.",
  keywords: [
    "Azhar Zuhro",
    "AI Engineer",
    "Machine Learning Engineer",
    "ML Engineer Portfolio",
    "Predictive ML",
    "Demand Forecasting",
    "LightGBM",
    "XGBoost",
    "FastAPI",
    "RAG",
    "Retrieval-Augmented Generation",
    "ChromaDB",
    "TensorFlow",
    "Deep Learning",
    "Computer Science",
    "Universitas Darussalam Gontor",
  ],
  authors: [{ name: "Azhar Zuhro", url: "https://github.com/azharzuhro12" }],
  creator: "Azhar Zuhro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://azharzuhro.vercel.app",
    title: "Azhar Zuhro | AI Engineer & Machine Learning Engineer",
    description:
      "Transforming data into intelligent systems through machine learning, generative AI, and practical software engineering.",
    siteName: "Azhar Zuhro Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azhar Zuhro | AI Engineer & Machine Learning Engineer",
    description:
      "Transforming data into intelligent systems through machine learning, generative AI, and practical software engineering.",
    creator: "@azharzuhro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]"
      >
        {children}
      </body>
    </html>
  );
}
