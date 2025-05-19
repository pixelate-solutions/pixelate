import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Pixelate Solutions',
  description: 'We bring peace and purpose by helping others thrive through websites as a service.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="light"
      style={{ colorScheme: 'light' }}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
