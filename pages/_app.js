import '@/styles/globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
// use la tipografía font inter con los carácteres latinos. Afecta a todo el proyecto.

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}

