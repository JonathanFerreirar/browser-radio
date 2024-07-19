'use client'

import React from 'react'

import { AudioPlayer } from '@/components/audioPlayer'
import { ErrorBoundary } from '@/components/errorBoundary'
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
          <ErrorBoundary
            key={`${favorite.stationuuid}`}
            errorMessage="error no audio"
          >
            <AudioPlayer src={String(favorite.url_resolved)} />
          </ErrorBoundary>
        )
      })}
    </div>
  )
}
export default Home
