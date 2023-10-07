import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'clarifion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-manrope'>{children}</body>
    </html>
  )
}
