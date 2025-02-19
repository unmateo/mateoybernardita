export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">

      <head>
        <meta property="og:title" content="Bernardita & Mateo" />
        <meta property="og:description" content="Bernardita & Mateo" />
        <meta property="og:image" content="background.png" />
      </head>

      <body>{children}</body>

      </html>
    )
  }