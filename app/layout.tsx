import './global.css';
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">

      <head>
        <meta property="og:title" content="Mateo y Bernardita" />
        <meta property="og:description" content="¡Nos casamos!" />
        <meta property="og:image" content="https://www.mateoybernardita.com.ar/whatsapp.jpg" />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700&family=Homemade+Apple&display=swap" rel="stylesheet"/>
      </head>
      <body>
        {children}
        <Analytics />
      </body>

      </html>
    )
  }