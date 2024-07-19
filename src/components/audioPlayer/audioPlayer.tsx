'use client'

import React from 'react'

import { Icons } from '@/app/icons'
import { Button } from '@/primitive/ui/button'

import { useAudioPlayer } from './audioPlayer.hooks'

export type AudioPlayerProps = {
  src: string
  className?: string
} & React.HTMLProps<HTMLAudioElement>

export const AudioPlayer = ({ src, ...rest }: AudioPlayerProps) => {
  const { audioRef, isPlaying, togglePlay } = useAudioPlayer()

  return (
    <Button
      type="button"
      variant="default"
      onClick={togglePlay}
      aria-label="Play or pause audio"
      className="size-12 rounded-full"
    >
      {isPlaying ? (
        <Icons.stop
          size={30}
          className="text-secondary"
          data-testid="test_audio_player_button_pause"
        />
      ) : (
        <Icons.play
          size={30}
          className="text-secondary"
          data-testid="test_audio_player_button_play"
        />
      )}
      <audio ref={audioRef} src={src || ''} {...rest} />
    </Button>
  )
}
