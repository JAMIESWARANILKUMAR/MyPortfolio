import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#05070d",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vyntyraconsultancyservices.in"),
  title: "Jami Eswar Anil Kumar | Founder & Executive Director | AI & Human Capital Architecture",
  description: "Executive portfolio of Jami Eswar Anil Kumar — Founder & Director at Vyntyra Consultancy Services. Architecting enterprise AI systems and human-centered organizational intelligence.",
  keywords: [
    "Jami Eswar Anil Kumar",
    "Vyntyra Consultancy Services",
    "Founder",
    "AI Architect",
    "Human Resources Leadership",
    "Executive Advisory",
    "HR Analytics",
    "Consultant",
    "Aditya Institute of Technology",
    "University of the People",
  ],
  authors: [{ name: "Jami Eswar Anil Kumar" }],
  creator: "Jami Eswar Anil Kumar",
  icons: {
    icon: [
      { url: "/Profile.webp", type: "image/webp" }
    ],
    shortcut: "/Profile.webp",
    apple: "/Profile.webp",
  },
  openGraph: {
    title: "Jami Eswar Anil Kumar | Founder & AI/HR Strategy Architect",
    description: "Building human-centered organizations by marrying HR intelligence with enterprise AI-driven growth.",
    url: "https://vyntyraconsultancyservices.in",
    siteName: "Jami Eswar Anil Kumar Portfolio",
    images: [
      {
        url: "/Profile.webp",
        width: 800,
        height: 800,
        alt: "Jami Eswar Anil Kumar Executive Portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Space+Grotesk:wght@500;600;700&family=Noto+Sans:wght@400;500;600&family=Noto+Sans+Devanagari:wght@400;500;600&family=Noto+Sans+Telugu:wght@400;500;600&family=Noto+Sans+Tamil:wght@400;500;600&family=Noto+Sans+Bengali:wght@400;500;600&family=Noto+Sans+Kannada:wght@400;500;600&family=Noto+Sans+Malayalam:wght@400;500;600&family=Noto+Sans+Gujarati:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css"
        />
        <link rel="icon" href="/Profile.webp" type="image/webp" />
        <link rel="shortcut icon" href="/Profile.webp" />
      </head>
      <body>
        <CustomCursor />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
