import './global.css';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">

      <head>
        <meta property="og:title" content="Mateo y Bernardita" />
        <meta property="og:description" content="Save the date" />
        <meta property="og:image" content="https://www.mateoybernardita.com.ar/whatsapp.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mateoybernardita.com.ar" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200;1,8..60,200&display=swap" rel="stylesheet"/>
      </head>

      <body>{children}</body>

      </html>
    )
  }