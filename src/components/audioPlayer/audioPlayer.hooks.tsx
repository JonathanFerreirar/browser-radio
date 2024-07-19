'use client'

import React from 'react'
import Hls from 'hls.js'

import { useIsPlaying } from '@/context/isPlaying'

export const useAudioPlayer = (src: string, id: string) => {
  const { setPlayingStationuuid, playingStationuuid } = useIsPlaying()

  const audioRef = React.useRef<HTMLAudioElement>(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setHlsInstance] = React.useState<Hls | null>(null)

  React.useEffect(() => {
    if (!audioRef.current) return

    const isM3U8 = isM3U8File(src)

    if (isM3U8) {
      const hls = new Hls()
      setHlsInstance(hls)

      hls.loadSource(src)
      hls.attachMedia(audioRef.current)

      return () => {
        hls.destroy()
      }
    }
  }, [src])

  const togglePlay = () => {
    const audios = document.querySelectorAll(
      '.audio',
    ) as NodeListOf<HTMLAudioElement>

    audios.forEach((audio) => {
      audio.pause()
      audio.autoplay = false
    })

    if (!audioRef.current) return

    if (playingStationuuid === id) {
      audioRef.current.pause()
      audioRef.current.autoplay = false
    } else {
      audioRef.current.play()
      audioRef.current.autoplay = true
    }

    setPlayingStationuuid(id)
  }

  const isM3U8File = (url: string) => {
    if (url.endsWith('.m3u8')) {
      return true
    } else {
      return false
    }
  }

  return { playingStationuuid, togglePlay, audioRef }
}
