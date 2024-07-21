'use client'

import React from 'react'
import { toast } from 'sonner'

import { StationCardPlaySkeleton } from '@/components/skeletons/stationCardPlay'
import { Sonners } from '@/components/sonners'
import { StationCardPlay } from '@/components/stationCardPlay/'
import { useFavorites } from '@/context/favorites'
import { IsplayingProvider } from '@/context/isPlaying'
import { useRadios } from '@/context/radios'

export const FavoritesRadios = () => {
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
    <section className="mt-5 flex max-h-[60vh] w-full flex-col gap-3 overflow-y-auto px-2 py-5 lg:p-5">
      {isLoading && <StationCardPlaySkeleton />}

      {!isLoading &&
        (favorites.length === 0 ? (
          <React.Fragment>
            <p className="text-center text-sm lg:hidden ">
              Click on{' '}
              <span className="text-base font-semibold">See all Radios</span> to
              add a radio on your favorites
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
  )
}
