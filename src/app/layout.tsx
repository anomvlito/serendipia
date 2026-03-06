import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serendipia Pan Pizzas",
  description: "Panadería y Pizzería con productos artesanales. Comida real, abundante y lista para el disfrute.",
  openGraph: {
    title: "Serendipia Pan Pizzas",
    description: "Panadería y Pizzería con productos artesanales.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth bg-black">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
      </head>
      <body
        className={`${montserrat.variable} antialiased bg-black min-h-screen relative font-body text-white`}
      >
        {children}
      </body>
    </html>
  );
}
