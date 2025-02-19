export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">

      <head>
        <meta property="og:title" content="Bernardita & Mateo" />
        <meta property="og:description" content="Falta poquito..." />
        <meta property="og:image" content="background.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mateoybernardita.com.ar" />
      </head>

      <body>{children}</body>

      </html>
    )
  }