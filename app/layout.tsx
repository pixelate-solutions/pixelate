import './globals.css'
import { Providers } from './providers'
import { Fraunces, Sora } from 'next/font/google'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata = {
  title: 'Pixelate Solutions',
  description: 'Full-stack product and AI engineering studio for modern teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ colorScheme: 'light dark' }} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`${sora.variable} ${fraunces.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
