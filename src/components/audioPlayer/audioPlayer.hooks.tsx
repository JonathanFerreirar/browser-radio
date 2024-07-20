'use client'

import React from 'react'
import Hls from 'hls.js'

import { useIsPlaying } from '@/context/isPlaying'

import { AudioPlayerProps } from './audioPlayer'

type UseAudioPlayerProps = Pick<AudioPlayerProps, 'id' | 'src' | 'isHls'>

export const useAudioPlayer = ({ id, isHls, src }: UseAudioPlayerProps) => {
  const { setPlayingStationuuid, playingStationuuid } = useIsPlaying()

  const audioRef = React.useRef<HTMLAudioElement>(null)

  const hlsRef = React.useRef<Hls | null>(null)

  React.useEffect(() => {
    const audio = audioRef.current

    if (!audio) return

    if (isHls) {
      if (Hls.isSupported()) {
        const hls = new Hls()
        hlsRef.current = hls
        hls.loadSource(src)
        hls.attachMedia(audio)

        hls.on(Hls.Events.MEDIA_ATTACHED, () => {
          console.log('HLS Media Attached')
        })

        hls.on(Hls.Events.ERROR, (event, data) => {
          console.error('HLS Error:', event, data)
        })

        return () => {
          hls.destroy()
          hlsRef.current = null
        }
      } else if (audio.canPlayType('application/vnd.apple.mpegurl')) {
        audio.src = src
      }
    } else {
      audio.src = src
    }
  }, [src, isHls])

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
      setPlayingStationuuid('')
      audioRef.current.autoplay = false
    } else {
      audioRef.current.play()
      setPlayingStationuuid(id)
      audioRef.current.autoplay = true
    }
  }

  return { playingStationuuid, togglePlay, audioRef }
}
