'use client'

import React from 'react'

import { Radio } from '@/types/radios'

type Favorites = Pick<
  Radio,
  'url' | 'country' | 'url_resolved' | 'name' | 'stationuuid'
>

type FavoritesContextProps = {
  favorites: Favorites[]
  removeFavorite: (url: string) => void
  addFavorite: (favorite: Favorites) => void
  editFavorite: (
    stationuuid: string,
    updatedFavorite: Partial<Favorites>,
  ) => void
}

const FavoritesContext = React.createContext({} as FavoritesContextProps)

export const FavoritesProvider = ({ children }: React.PropsWithChildren) => {
  const [favorites, setFavorires] = React.useState([] as Favorites[])

  const addFavorite = (favorite: Favorites) => {
    setFavorires([favorite, ...favorites])
  }
  const removeFavorite = (url: string) => {
    const newFavorites = favorites.filter((favorite) => favorite.url !== url)

    setFavorires(newFavorites)
  }

  const editFavorite = (
    stationuuid: string,
    updatedFavorite: Partial<Favorites>,
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
