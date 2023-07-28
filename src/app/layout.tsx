import Header from '@/components/header/header'
import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import CategoriaProvider from '@/context/categoria'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DefaultProviders } from '@/components/default-providers'

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
}) 


{

  const client = new QueryClient();

  return (
    

    <html lang="pt-br">
      <body className={saira.className}>
        <DefaultProviders>
          <Header />
          {children}
        </DefaultProviders>
      </body>
    </html>
    

  );
}
