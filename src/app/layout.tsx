import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
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
    <html lang="es" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
      </head>
      <body
        className={`${playfairDisplay.variable} ${montserrat.variable} antialiased wood-bg min-h-screen relative font-body`}
      >
        {children}
      </body>
    </html>
  );
}
