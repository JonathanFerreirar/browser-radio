'use client'

import React from 'react'

export const useAudioPlayer = () => {
  const audioRef = React.useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = React.useState(false)

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      audioRef.current.autoplay = false
    } else {
      const playPromise = audioRef.current.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {})
          .catch((error) => {
            console.error('Erro ao reproduzir áudio:', error)
          })
      }

      audioRef.current.autoplay = true
    }

    setIsPlaying(!isPlaying)
  }

  return { isPlaying, togglePlay, audioRef }
}
