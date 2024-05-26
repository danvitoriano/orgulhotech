import './globals.css'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Orgulho Tech Conf',
  description: '#saveTheDate: Sábado 1º de Junho de 2024. A 1ª conferência para profissionais LGBTQ+ na tecnologia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="AW-11309461517" />
      <Script
          async 
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/21db23b6-9557-4dd7-bcb5-62eea936f818-loader.js"
        />
    </html>
  )
}
