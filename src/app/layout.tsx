import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

// font awesome styles import to enable fa css behaviors in nextjs
import '@fortawesome/fontawesome-svg-core/styles.css'
// font awesome config override to disable fa from auto adding <style>
// elements into the <head> of pages
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const poppins = Poppins({
  weight: ['100', '500', '900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Bryan M. Wolf',
  description: 'My personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
