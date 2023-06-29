import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'jubex',
  description: 'Jual Beli Mobil Terpercaya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
