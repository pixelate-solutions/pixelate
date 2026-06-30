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
  title: 'Pixelate Solutions | Custom Software & Product Studio',
  description:
    'Pixelate Solutions builds custom websites, web apps, mobile-friendly tools, customer portals, dashboards, automations, and AI platforms for growing businesses.',
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
