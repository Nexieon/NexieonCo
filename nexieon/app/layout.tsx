import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './stylesheets/globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '300',
})

export const metadata = {
  title: 'Nexieon - Home',
  description: 'Building custom software solutions for ambitious businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />

        {children}

        <Footer/>
      </body>
    </html>
  )
}
