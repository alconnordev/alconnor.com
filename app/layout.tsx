import './globals.css'

import { ClerkProvider } from '@clerk/nextjs'
import { type Metadata } from 'next'

import { zhCN } from '~/lib/clerkLocalizations'

import { ThemeProvider } from './(main)/ThemeProvider'
import { TailwindIndicator } from './tailwind-indicator'

export const metadata: Metadata = {
  title: 'alconnor',
  description: 'description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={zhCN}>
      <html lang="en" suppressHydrationWarning>
        <body>
          <TailwindIndicator></TailwindIndicator>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
