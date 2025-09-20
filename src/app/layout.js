import { Sora, Syne } from "next/font/google";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const body = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Cesar Rico | Portafolio",
  description:
    "Portafolio minimalista de Cesar Rico con proyectos destacados, habilidades y formas de contacto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
