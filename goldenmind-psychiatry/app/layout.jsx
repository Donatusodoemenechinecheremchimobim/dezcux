import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

// Elegant high-contrast serif for display headlines — reads premium / editorial.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Clean, quiet sans for body copy and UI.
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Goldenmind Psychiatry — Where Every Mind Is Golden",
  description:
    "Premier psychiatric care, evaluations, medication management, and telehealth. Modern, compassionate mental health care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
