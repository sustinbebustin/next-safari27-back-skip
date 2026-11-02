import Link from "next/link";

export const metadata = { title: "Safari 27 back-skip repro" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui", padding: 24 }}>
        <nav style={{ marginBottom: 16 }}>
          <Link href="/items">Items</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
