import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Iceberg } from 'next/font/google'
import Header from "./components/header"
import Link from 'next/link'

const poppins = Poppins({
  weight: ['400','700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})
const iceberg = Iceberg({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: "--Iceberg"
})

export const metadata: Metadata = {
  title: 'Chirag | Full Stack Developer',
  description: 'Generated by create next app'
}
const Code = () => (
  <svg width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" stroke="currentcolor" strokeWidth="2"
      d="M9,22 L15,2 M17,17 L22,12 L17,7 M7,17 L2,12 L7,7"
    />
  </svg>
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${iceberg.variable}`}>
        <Header />

        {children}

        <footer className='flex justify-center'>
          <pre className='flex'>
            {"© 2022 - Designed and Developed by "}
            <Link href='https://linktr.ee/chirag.dev' className=' text-green-600'>Chirag</Link>
            {". Built with "}
            <Link href="https://nextjs.org/" className='flex items-center text-[#0070f3]' rel="noreferrer" target="_blank">
              <Code /> NextJs
            </Link>
            {" & hosted on"}
            <Link href="https://vercel.com/" className='ml-1 text-yellow-500' rel="noreferrer" target="_blank">
              Vercel.
            </Link>
          </pre>
        </footer>
      </body>
    </html>
  )
}
