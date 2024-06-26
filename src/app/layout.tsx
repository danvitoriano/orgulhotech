import './globals.css'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

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
    </html>
  )
}
