import "../globals.css";

export const metadata = {
  title: "Inko Jaya Konstruksi",
  description: "Korean Construction Company in Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}