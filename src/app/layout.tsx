import Header from '@/components/header/header'
import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import CategoriaProvider from '@/context/categoria'

const saira = Saira({ 
  weight: ['300', '400', '500', '700' ],
  subsets: ['latin']
 })

export const metadata: Metadata = {
  title: 'Loja de Calçados',
  description: 'Minha loja de calçados.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>
        <CategoriaProvider>
          <Header />
          {children}
        </CategoriaProvider>
      </body>
    </html>
  );
}
