import ClientRootLayout from "./ClientRootLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
