'use client'

import React from 'react'

export const useAudioPlayer = () => {
  const audioRef = React.useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = React.useState(false)

  const togglePlay = () => {
    try {
      if (!audioRef.current) return

      if (isPlaying) {
        audioRef.current.pause()
        audioRef.current.autoplay = false
      } else {
        const playPromise = audioRef.current.play()

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Reprodução iniciada com sucesso
            })
            .catch((error) => {
              console.error('Erro ao reproduzir áudio:', error)
              throw new Error(error)
            })
        }

        audioRef.current.autoplay = true
      }

      setIsPlaying(!isPlaying)
    } catch (error) {
      console.error('Erro inesperado:', error)
      // Aqui você pode lidar com o erro de forma genérica, se necessário
    }
  }

  return { isPlaying, togglePlay, audioRef }
}
