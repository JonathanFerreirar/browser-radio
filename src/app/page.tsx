'use client'

import React from 'react'
import Image from 'next/image'
import { toast } from 'sonner'

import Logo from '@/../public/logo.png'
import Search from '@/components/search/search'
import { Sonners } from '@/components/sonners'
import StationCardPlay from '@/components/stationCardPlay/stationCardPlay'
import { useFavorites } from '@/context/favorites'
import { IsplayingProvider } from '@/context/isPlaying'
import { useRadios } from '@/context/radios'

type Home = {
  children: React.ReactNode
}

const Home = () => {
  const { updateRadio } = useRadios()
  const { favorites, removeFavorite } = useFavorites()

  const removeRadioFromFavorite = (stationuuid: string) => {
    removeFavorite(stationuuid)
    updateRadio(stationuuid, { isFavorite: false })
    return toast(<Sonners.unfavorited />, {
      duration: 700,
    })
  }

  return (
    <div className="mx-auto hidden h-screen w-full max-w-[1100px] px-20 py-10 max-sm:px-3 lg:block">
      <div className="flex items-center justify-center gap-5">
        <Image alt="Radio Browser" src={Logo} width={100} height={500} />
        <h1 className="text-3xl font-semibold">Radio Browser</h1>
      </div>
      <header className="mt-10 flex items-center justify-between">
        <label htmlFor="favorite_search" className="text-2xl font-semibold">
          Favorite Radios
        </label>
        <div className="w-1/2 pb-px has-[input:focus]:bg-primary">
          <Search
            id="favorite_search"
            placeholder="search a station"
            className="rounded-none border-x-transparent border-t-transparent bg-white  focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </header>

      <section className="mt-5 flex max-h-[60vh] w-full flex-col gap-3 overflow-y-auto p-5">
        <IsplayingProvider>
          {favorites.map((favorite) => {
            return (
              <StationCardPlay
                favorite={favorite}
                key={favorite.stationuuid}
                removeRadioFromFavorite={removeRadioFromFavorite}
              />
            )
          })}
        </IsplayingProvider>
      </section>
    </div>
  )
}
export default Home
