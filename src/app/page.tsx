'use client'

import React from 'react'

import Station from '@/components/station/station'
import { useFavorites } from '@/context/favorites'

type Home = {
  children: React.ReactNode
}

const Home = () => {
  const { favorites } = useFavorites()
  return (
    <div className="w-full">
      {favorites.map((favorite, index) => {
        return (
          <Station
            name={favorite.name}
            key={`radio.name - ${index}`}
            fallBack={`Station - ${favorite.stationuuid}`}
          />
        )
      })}
    </div>
  )
}
export default Home
