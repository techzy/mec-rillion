import type { Metadata, Viewport } from "next";
import { Architects_Daughter, IBM_Plex_Mono, Saira_Stencil } from "next/font/google";
import { Nav } from "@/components/Nav";
import "./globals.css";

const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex" });
const stencil = Saira_Stencil({ subsets: ["latin"], weight: "600", variable: "--font-stencil" });
const hand = Architects_Daughter({ subsets: ["latin"], weight: "400", variable: "--font-hand-raw" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mec-rillion.lifeofjeso.ca"),
  title: { default: "MEC-RILLION · the daily drawing", template: "%s · MEC-RILLION" },
  description: "A daily mechanical-engineering word game. Name one thing in 25 seconds. Rare answers hold tighter tolerance.",
  openGraph: {
    title: "MEC-RILLION · one in a mec-rillion",
    description: "7 prompts a day. 25 seconds each. Rare mechanical-engineering answers score big.",
    url: "https://mec-rillion.lifeofjeso.ca",
    siteName: "MEC-RILLION",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#0a3c6e", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plex.variable} ${stencil.variable} ${hand.variable}`}>
      <body>
        <div className="frame">
          <Nav />
          <main>{children}</main>
          <footer className="footer">
            <span>MEC-RILLION · one in a mec-rillion</span>
            <span>a mechanical-engineering spin on the rare-answer game, inspired by Krillion</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
