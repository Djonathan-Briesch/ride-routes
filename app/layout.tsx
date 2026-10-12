import './globals.css'

import type { Metadata } from 'next'
import { Manrope, Source_Sans_3 } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans-3',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ride Routes',
    template: '%s | Ride Routes',
  },
  applicationName: 'Ride Routes',
  description:
    'Explore rotas de ciclismo e descubra novos percursos.',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${sourceSans3.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
