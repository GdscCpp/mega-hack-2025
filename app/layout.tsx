import { ApplicationShell3 } from "@/components/ApplicationShell3";
import { IBM_Plex_Sans } from "next/font/google";

// 👇 Configure IBM Plex Sans
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

import "./globals.css";
import { Feed } from "@/components/Feed";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" className={ibmPlexSans.className}>
      <body className="bg-dark">
        <ApplicationShell3>
          <Feed />
        </ApplicationShell3>
      </body>
    </html>
  );
}
