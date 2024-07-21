'use client'

import React from 'react'
import Image from 'next/image'
import { toast } from 'sonner'

import Logo from '@/../public/logo.png'
import Search from '@/components/search/search'
import { RadiosListSheet } from '@/components/sheets/radiosList'
import { StationCardPlaySkeleton } from '@/components/skeletons/stationCardPlay'
import { Sonners } from '@/components/sonners'
import StationCardPlay from '@/components/stationCardPlay/stationCardPlay'
import { useFavorites } from '@/context/favorites'
import { IsplayingProvider } from '@/context/isPlaying'
import { useRadios } from '@/context/radios'
import { Button } from '@/primitive/ui/button'

import { Icons } from './icons'

type Home = {
  children: React.ReactNode
}

const Home = () => {
  const { updateRadio } = useRadios()
  const { favorites, removeFavorite, isLoading } = useFavorites()

  const removeRadioFromFavorite = (stationuuid: string) => {
    removeFavorite(stationuuid)
    updateRadio(stationuuid, { isFavorite: false })
    return toast(<Sonners.unfavorited />, {
      duration: 700,
    })
  }

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
      <header className="mt-10 flex items-start max-sm:flex-col max-sm:gap-3 sm:items-center sm:justify-between">
        <label
          htmlFor="favorite_search"
          className="text-sm font-medium sm:text-2xl sm:font-semibold"
        >
          Favorite Radios
        </label>
        <div className="w-full pb-px has-[input:focus]:bg-primary sm:w-1/2">
          <Search
            id="favorite_search"
            placeholder="search a station"
            className="rounded-none border-x-transparent border-t-transparent bg-white  focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </header>

      <section className="mt-5 flex max-h-[60vh] w-full flex-col gap-3 overflow-y-auto px-2 py-5 lg:p-5">
        {isLoading && <StationCardPlaySkeleton />}

        {!isLoading &&
          (favorites.length === 0 ? (
            <React.Fragment>
              <p className="text-center text-sm lg:hidden ">
                Click on{' '}
                <span className="text-base font-semibold">See all Radios</span>{' '}
                to add a radio on your favorites
              </p>

              <p className="hidden text-center text-base lg:block">
                Click in a{' '}
                <span className="text-xl font-semibold">Radio station</span> to
                add a radio on your favorites
              </p>
            </React.Fragment>
          ) : (
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
          ))}
      </section>
    </div>
  )
}
export default Home
