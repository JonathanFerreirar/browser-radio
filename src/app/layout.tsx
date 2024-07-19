import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import LeftSide from '@/components/layout/leftSide'
import { FavoritesProvider } from '@/context/favorites'
import { RadiosProvider } from '@/context/radios'
import { cn } from '@/lib/utils'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

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
      <body className={poppins.className}>
        <main
          className={cn(
            'flex items-center justify-center min-h-screen min-w-screen bg-white',
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
