import React from 'react'
import Image from 'next/image'

import Logo from '@/../public/logo.png'
import { FavoritesRadios } from '@/components/layout/favorites'
import { RadiosListSheet } from '@/components/sheets/radiosList'
import { Button } from '@/primitive/ui/button'

import { Icons } from './icons'

const Favorites = () => {
  return (
    <div className="mx-auto h-screen max-h-screen w-full max-w-[1100px] px-20 py-10 max-sm:px-3">
      <div className="flex items-center justify-between gap-5 sm:justify-center">
        <div className="flex items-center justify-center gap-3 lg:gap-5 ">
          <Image
            alt="Radio Browser"
            src={Logo}
            width={100}
            height={500}
            className="max-sm:size-10"
          />
          <h1 className="text-xl font-semibold sm:text-3xl">Radio Browser</h1>
        </div>
        <RadiosListSheet>
          <Button
            variant="link"
            className="flex items-center gap-2 pr-0 underline lg:hidden"
          >
            {' '}
            <h3 className="text-xs font-semibold">See all Radios</h3>{' '}
            <Icons.arrowLeft />
          </Button>
        </RadiosListSheet>
      </div>
      <header className="mt-10 flex items-start px-2 max-sm:flex-col max-sm:gap-3 sm:items-center sm:justify-between lg:px-5">
        <label
          htmlFor="favorite_search"
          className="text-sm font-medium sm:text-2xl sm:font-semibold"
        >
          Favorites Radios
        </label>
      </header>

      <FavoritesRadios />
    </div>
  )
}
export default Favorites
