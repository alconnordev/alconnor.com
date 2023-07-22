import './globals.css'
import { type Metadata } from 'next'
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
    <html
      lang="en"
      suppressHydrationWarning
      // className="h-full p-0 m-0 antialiased"
    >
      {/* className={inter.className} */}
      <body>
        {/* {children} */}
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
  )
}
