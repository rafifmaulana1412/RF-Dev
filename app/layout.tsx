import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "rf dev — Jasa Web Developer Pamulang Tangsel | Web Development Studio",
  description:
    "Jasa pembuatan website profesional di Pamulang, Tangerang Selatan. Landing page, aplikasi fullstack, payment gateway, dan maintenance. Harga transparan, pengerjaan cepat, production-ready.",
  metadataBase: new URL("https://rf-dev-olive.vercel.app"),
  keywords: [
    "jasa web developer pamulang",
    "jasa web developer tangerang selatan",
    "jasa pembuatan website tangsel",
    "web developer pamulang",
    "jasa landing page tangsel",
    "jasa fullstack developer tangerang",
    "rf dev",
    "rf dev web studio",
  ],
  openGraph: {
    title: "rf dev — Jasa Web Developer Pamulang Tangsel",
    description:
      "Jasa pembuatan website profesional di Pamulang, Tangerang Selatan. Landing page, aplikasi fullstack, payment gateway, dan maintenance.",
    url: "https://rf-dev-olive.vercel.app",
    siteName: "RF dev",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 800,
        alt: "rf dev — Web Development Studio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "rf dev — Web Development Studio",
    description:
      "Full-stack web development studio. Landing pages, fullstack apps, payment gateway integration, and maintenance.",
    images: ["/logo.jpeg"],
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  verification: {
    google: "ZLoZOOSGa7ewNE7cHQkjJllrIwIiglnnb2xQ5nFmpdg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
