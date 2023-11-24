import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <nav className="w-full flex gap-2 justify-center items-center">
        <Link href="/">Home</Link>
        <Link href="/streaming2">Streaming</Link>
      </nav>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
