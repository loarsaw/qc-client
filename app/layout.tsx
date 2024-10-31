import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import NavBar from "@/components/header/nav";
import StoreProvider from "./AppProvider";
import { Suspense } from "react";
import { Notifications } from '@mantine/notifications'
import '@mantine/notifications/styles.css';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quick Course",
  description: "A Platform for Learning with Generative AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black `}
      >
        <StoreProvider>
          <MantineProvider>
            <NavBar />
            <Notifications />
            <Suspense>
              <div className="min-h-[calc(100vh-80px)]">{children}</div>
            </Suspense>
          </MantineProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
