import './globals.css'

import React from 'react'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import LeftSide from '@/components/layout/leftSide'
import { FavoritesProvider } from '@/context/favorites'
import { RadiosProvider } from '@/context/radios'
import { cn } from '@/lib/utils'
import { Toaster } from '@/primitive/ui/sonner'

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
      <body className={`${poppins.className} bg-white`}>
        <React.Suspense>
          <RadiosProvider>
            <FavoritesProvider>
              <main
                className={cn(
                  'flex items-center justify-center min-h-screen min-w-screen bg-white',
                )}
              >
                <LeftSide />
                {children}
              </main>
            </FavoritesProvider>
          </RadiosProvider>
        </React.Suspense>
        <Toaster
          position="top-right"
          toastOptions={{
            unstyled: true,
            style: {
              marginTop: 15,
            },
          }}
        />
      </body>
    </html>
  )
}

export default RootLayout
