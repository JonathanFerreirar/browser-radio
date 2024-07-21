'use client'

import React from 'react'

import { getStorage, setStorage } from '@/lib/utils'
import { Radio } from '@/types/radios'

export type Favorite = Pick<
  Radio,
  'url' | 'country' | 'url_resolved' | 'name' | 'stationuuid' | 'tags' | 'hls'
>

export type FavoritesContextProps = {
  favorites: Favorite[]
  isLoading: boolean
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
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const itemsOnStorage = getStorage('favorite')

    const LocalStoragefavorites = JSON.parse(String(itemsOnStorage))

    if (LocalStoragefavorites) {
      setFavorires(LocalStoragefavorites)
    }

    setIsLoading(false)
  }, [])

  const addFavorite = (favorite: Favorite) => {
    const alreadyHas = favorites.some(
      (favor) => favor.stationuuid === favorite.stationuuid,
    )

    if (alreadyHas) {
      return
    }

    setFavorires([...favorites, favorite])
    setStorage('favorite', JSON.stringify([...favorites, favorite]))
  }

  const removeFavorite = (stationuuid: string) => {
    const newFavorites = favorites.filter(
      (favorite) => favorite.stationuuid !== stationuuid,
    )

    setFavorires(newFavorites)
    setStorage('favorite', JSON.stringify(newFavorites))
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
    setStorage('favorite', JSON.stringify(favoriteToEdit))
  }
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isLoading,
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
