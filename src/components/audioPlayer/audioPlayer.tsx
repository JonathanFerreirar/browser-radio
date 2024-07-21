'use client'

import { Icons } from '@/app/icons'
import { Button, ButtonProps } from '@/primitive/ui/button'

import { useAudioPlayer } from './audioPlayer.hooks'

export type AudioPlayerProps = {
  id: string
  src: string
  isHls: boolean
  className?: string
} & ButtonProps

export const AudioPlayer = ({ id, src, isHls, ...rest }: AudioPlayerProps) => {
  const { playingStationuuid, audioRef, togglePlay } = useAudioPlayer({
    id,
    src,
    isHls,
  })

  return (
    <Button
      {...rest}
      type="button"
      variant="default"
      onClick={togglePlay}
      data-testid="test_audioPlayer"
      aria-label="Play or pause audio"
      className="size-12 rounded-full"
    >
      {playingStationuuid === id ? (
        <Icons.stop
          size={30}
          className="text-secondary"
          data-testid="test_audioPlayer_button_pause"
        />
      ) : (
        <Icons.play
          size={30}
          className="text-secondary"
          data-testid="test_audioPlayer_button_play"
        />
      )}
      <audio
        ref={audioRef}
        src={src || ''}
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="audio"
      />
    </Button>
  )
}
