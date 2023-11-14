import './globals.css'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Montserrat } from 'next/font/google'


const mont = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400','500','700', '800', '900']
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`bg-light ${mont.className} dark:bg-dark`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
