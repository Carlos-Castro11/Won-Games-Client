'use client'
import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './providers'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <Providers>{children}</Providers>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
