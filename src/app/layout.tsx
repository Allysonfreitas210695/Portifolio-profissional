import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://allysonfreitas.dev"), // Placeholder: user can update this later
  title: {
    default: "Allyson Freitas | Desenvolvedor Fullstack .NET & Next.js",
    template: "%s | Allyson Freitas",
  },
  description: "Desenvolvedor Fullstack com mais de 4 anos de experiência, especializado em .NET, React e Next.js para soluções escaláveis.",
  keywords: [
    "Allyson Freitas", 
    "Desenvolvedor Fullstack", 
    "Software Engineer", 
    "Next.js", 
    ".NET Developer", 
    "C#", 
    "React Specialist", 
    "Azure", 
    "Cloud Solutions"
  ],
  authors: [{ name: "Allyson Freitas" }],
  creator: "Allyson Freitas",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Allyson Freitas Portfolio",
    title: "Allyson Freitas | Desenvolvedor Fullstack .NET & Next.js",
    description: "Desenvolvedor Fullstack com mais de 4 anos de experiência na CSJ Sistemas, criando soluções robustas com .NET e Next.js.",
    images: [
      {
        url: "/og-image.png", // Next.js will automatically look for opengraph-image.png/jpg/etc. in /app
        width: 1200,
        height: 630,
        alt: "Allyson Freitas Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Allyson Freitas | Desenvolvedor Fullstack .NET & Next.js",
    description: "Desenvolvedor Fullstack com mais de 4 anos de experiência na CSJ Sistemas, criando soluções robustas com .NET e Next.js.",
    creator: "@allysonfreitas",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-background text-on-surface flex flex-col grainy-overlay">
        {children}
      </body>
    </html>
  );
}
