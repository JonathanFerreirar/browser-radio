'use client'

import React from 'react'

import { getRadios } from '@/actions/radios.action'
import { Radio, Radios } from '@/types/radios'

type RadiosContextProps = {
  radios: Radios
  searchList: Radios
  isLoading: boolean
  setSearchList: React.Dispatch<React.SetStateAction<Radios>>
  updateRadio: (url: string, updatedRadio: Partial<Radio>) => void
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

      setRadios(radiosResult)
      setIsloading(false)
    }
    fetchRadios()
  }, [])

  const updateRadio = (stationuuid: string, updatedRadio: Partial<Radio>) => {
    setRadios(
      radios.map((radio) =>
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
