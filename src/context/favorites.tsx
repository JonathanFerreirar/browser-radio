'use client'

import React from 'react'

import { Radio } from '@/types/radios'

export type Favorite = Pick<
  Radio,
  'url' | 'country' | 'url_resolved' | 'name' | 'stationuuid' | 'tags' | 'hls'
>

export type FavoritesContextProps = {
  favorites: Favorite[]
  removeFavorite: (stationuuid: string) => void
  addFavorite: (favorite: Favorite) => void
  editFavorite: (
    stationuuid: string,
    updatedFavorite: Partial<Favorite>,
  ) => void
}

const FavoritesContext = React.createContext({} as FavoritesContextProps)

export const FavoritesProvider = ({ children }: React.PropsWithChildren) => {
  const [favorites, setFavorires] = React.useState([] as Favorite[])

  const addFavorite = (favorite: Favorite) => {
    const alreadyHas = favorites.some(
      (favor) => favor.stationuuid === favorite.stationuuid,
    )

    if (alreadyHas) {
      return
    }

    setFavorires([...favorites, favorite])
  }
  const removeFavorite = (stationuuid: string) => {
    const newFavorites = favorites.filter(
      (favorite) => favorite.stationuuid !== stationuuid,
    )

    setFavorires(newFavorites)
  }

  const editFavorite = (
    stationuuid: string,
    updatedFavorite: Partial<Favorite>,
  ) => {
    const favoriteToEdit = favorites.map((favorite) =>
      favorite.stationuuid === stationuuid
        ? { ...favorite, ...updatedFavorite }
        : favorite,
    )

    setFavorires(favoriteToEdit)
  }
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        editFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export const useFavorites = () => {
  return React.useContext(FavoritesContext)
}
