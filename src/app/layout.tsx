import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const newsreader = Newsreader({ 
  subsets: ["latin"], 
  style: ['normal', 'italic'],
  variable: "--font-newsreader" 
});

export const metadata: Metadata = {
  title: "Chronomind | Interactive Dementia Care Simulator",
  description: "Train caregivers through branching, choice-driven scenarios. Test your empathy, communication, and safety reflexes before you need them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${newsreader.variable} font-body bg-background-primary text-text-primary antialiased min-h-screen flex flex-col`}>
        {/* Navigation */}
        <nav className="flex items-center justify-between max-w-[1120px] w-full mx-auto px-6 py-5">
          <span className="font-display text-[22px] font-bold tracking-[-0.02em] text-text-primary">Chronomind</span>
          <a
            className="font-body text-[15px] font-medium text-text-secondary no-underline transition-colors duration-150 hover:text-text-primary"
            href="#cta"
          ></a>
        </nav>
        
        <main className="flex-1">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="flex items-center justify-between max-w-[1120px] w-full mx-auto px-6 py-8 border-t border-border-subtle mt-16">
          <span className="font-display text-[18px] font-bold text-text-secondary opacity-60">Chronomind</span>
          <div className="flex items-center space-x-4">
            <a href="/privacy-policy" className="text-[13px] text-text-secondary no-underline hover:underline">Privacy Policy</a>
            <a href="/terms-of-use" className="text-[13px] text-text-secondary no-underline hover:underline">Terms of Use</a>
            <p className="text-[13px] text-text-secondary m-0">© 2026 Chronomind. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
