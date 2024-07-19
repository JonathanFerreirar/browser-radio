import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import LeftSide from '@/components/layout/leftSide'
import { FavoritesProvider } from '@/context/favorites'
import { RadiosProvider } from '@/context/radios'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Radio Browser',
  description: 'Follow the best music stations with Radio Browser',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main
          className={cn(
            'grid grid-cols-2 grid-rows-1 min-h-screen min-w-screen bg-white',
          )}
        >
          <RadiosProvider>
            <FavoritesProvider>
              <LeftSide />
              {children}
            </FavoritesProvider>
          </RadiosProvider>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
