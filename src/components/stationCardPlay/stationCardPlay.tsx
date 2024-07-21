import React from 'react'

import { Icons } from '@/app/icons'
import { Favorite } from '@/context/favorites'
import { cn } from '@/lib/utils'
import { Button } from '@/primitive/ui/button'

import { AudioPlayer } from '../audioPlayer'
import { EditStationSheet } from '../sheets/editStation'

type StationCardPlayProps = {
  favorite: Favorite
  removeRadioFromFavorite: (stationuuid: string) => void
} & React.ComponentProps<'div'>

export const StationCardPlay = ({
  favorite,
  removeRadioFromFavorite,
  ...props
}: StationCardPlayProps) => {
  const { name, tags, country, stationuuid, url } = favorite

  return (
    <div
      {...props}
      className={cn(
        'flex w-full items-center justify-between rounded-sm bg-white border-secondary border px-1 py-5 sm:p-5',
        props.className,
      )}
      data-testid="test_StationCardPlay"
    >
      <div className="flex items-start gap-4">
        <AudioPlayer
          src={url}
          id={stationuuid}
          isHls={!!favorite.hls}
          data-testid="test_StationCardPlay_audioPayer"
        />
        <div className="flex flex-col items-start">
          <label
            data-testid="test_StationCardPlay_name"
            aria-label="Name of station"
            className="max-sm:max-w-[150px] max-sm:truncate"
            htmlFor={stationuuid}
          >
            {name}
          </label>
          <span
            data-testid="test_StationCardPlay_tags"
            className="max-sm:max-w-[150px] max-sm:truncate"
          >
            {tags || country}
          </span>
        </div>
      </div>

      <div className="flex w-full max-w-[100px] justify-between gap-2">
        <EditStationSheet favorite={favorite}>
          <Button
            size="icon"
            variant="ghost"
            aria-label="Edit Station"
            data-testid="test_StationCardPlay_edit"
          >
            <Icons.pencil size={20} />{' '}
          </Button>
        </EditStationSheet>
        <Button
          size="icon"
          variant="ghost"
          aria-label="Remove station"
          data-testid="test_StationCardPlay_remove"
          onClick={() => removeRadioFromFavorite(stationuuid)}
        >
          <Icons.trash size={20} />{' '}
        </Button>
      </div>
    </div>
  )
}
