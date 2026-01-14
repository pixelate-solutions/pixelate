'use client'

import { ThemeProvider, useTheme } from 'next-themes'
import { ReactNode, useEffect } from 'react'

function SystemThemeSync({ children }: { children: ReactNode }) {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme('system')
  }, [setTheme])

  return <>{children}</>
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <SystemThemeSync>{children}</SystemThemeSync>
    </ThemeProvider>
  )
}
