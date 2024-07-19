'use client'

import React from 'react'

type AudioContextProps = {
  playingStationuuid: string
  setPlayingStationuuid: React.Dispatch<React.SetStateAction<string>>
}

const IsplayingContext = React.createContext({} as AudioContextProps)

export const IsplayingProvider = ({ children }: React.PropsWithChildren) => {
  const [playingStationuuid, setPlayingStationuuid] = React.useState('')

  return (
    <IsplayingContext.Provider
      value={{ playingStationuuid, setPlayingStationuuid }}
    >
      {children}
    </IsplayingContext.Provider>
  )
}

export const useIsPlaying = () => React.useContext(IsplayingContext)
