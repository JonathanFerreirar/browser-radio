'use client'

import React from 'react'

import { AudioPlayer } from '@/components/audioPlayer'
import { useFavorites } from '@/context/favorites'

type Home = {
  children: React.ReactNode
}

const Home = () => {
  const { favorites } = useFavorites()
  return (
    <div className="w-full">
      {favorites.map((favorite) => {
        return (
          <AudioPlayer
            key={`${favorite.stationuuid}`}
            src={String(favorite.url_resolved)}
          />
        )
      })}
    </div>
  )
}
export default Home
