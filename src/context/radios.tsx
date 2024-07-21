'use client'

import React from 'react'

import { getRadios } from '@/actions/radios.action'
import { getStorage } from '@/lib/utils'
import { Radio, Radios } from '@/types/radios'

import { Favorite } from './favorites'

type RadiosContextProps = {
  radios: Radios
  searchList: Radios
  isLoading: boolean
  addRadioByOffset: (offset: number) => Promise<void>
  setSearchList: React.Dispatch<React.SetStateAction<Radios>>
  updateRadio: (url: string, updatedRadio: Partial<Radio>) => void
  updateSearchRadio: (url: string, updatedRadio: Partial<Radio>) => void
}

const RadiosContext = React.createContext({} as RadiosContextProps)

export const RadiosProvider = ({ children }: React.PropsWithChildren) => {
  const [radios, setRadios] = React.useState<Radios>([])
  const [isLoading, setIsloading] = React.useState(false)
  const [searchList, setSearchList] = React.useState<Radios>([])

  React.useEffect(() => {
    setIsloading(true)

    const fetchRadios = async () => {
      const radiosResult = await getRadios()

      const itemsOnStorage = getStorage('favorite')
      const LocalStoragefavorites = JSON.parse(
        String(itemsOnStorage),
      ) as Favorite[]
      if (LocalStoragefavorites) {
        const radiosWithCorrectlyFavorites = radiosResult.map((radio) => {
          const isFavorite = LocalStoragefavorites.some(
            (favorite) => favorite.stationuuid === radio.stationuuid,
          )

          return { ...radio, isFavorite }
        }) as Radios

        setRadios(radiosWithCorrectlyFavorites)
      } else {
        setRadios(radiosResult)
      }

      setIsloading(false)
    }
    fetchRadios()
  }, [])

  const addRadioByOffset = async (offset: number) => {
    const moreRadios = await getRadios(offset)

    setRadios([...radios, ...moreRadios])
  }

  const updateRadio = (stationuuid: string, updatedRadio: Partial<Radio>) => {
    setRadios(
      radios.map((radio) =>
        radio.stationuuid === stationuuid
          ? { ...radio, ...updatedRadio }
          : radio,
      ) as Radios,
    )
  }

  const updateSearchRadio = (
    stationuuid: string,
    updatedRadio: Partial<Radio>,
  ) => {
    setSearchList(
      searchList.map((radio) =>
        radio.stationuuid === stationuuid
          ? { ...radio, ...updatedRadio }
          : radio,
      ) as Radios,
    )
  }

  return (
    <RadiosContext.Provider
      value={{
        isLoading,
        searchList,
        updateRadio,
        setSearchList,
        addRadioByOffset,
        updateSearchRadio,
        radios: searchList.length > 1 ? searchList : radios,
      }}
    >
      {children}
    </RadiosContext.Provider>
  )
}

export const useRadios = () => {
  return React.useContext(RadiosContext)
}
