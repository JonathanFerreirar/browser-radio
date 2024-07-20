'use client'

import Station from '@/components/station/station'
import { useFavorites } from '@/context/favorites'
import { useRadios } from '@/context/radios'
import { Skeleton } from '@/primitive/ui/skeleton'
import { Radio } from '@/types/radios'

export const RadiosList = () => {
  const { addFavorite } = useFavorites()

  const { radios, isLoading, updateRadio } = useRadios()

  if (isLoading) {
    return (
      <div className="max-h-[80vh] space-y-5 overflow-y-auto px-3 py-5">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="relative size-auto">
            <Skeleton className="w-full justify-start bg-primary p-4 py-6 outline outline-1 outline-secondary hover:outline-[3px]" />
            <Skeleton className="absolute bottom-1/2 left-4  h-[4px] w-[100px] translate-y-1/2 bg-secondary" />
          </div>
        ))}
      </div>
    )
  }

  const addRadioToFavorite = (radio: Radio) => {
    addFavorite(radio)
    updateRadio(radio.stationuuid, { isFavorite: true })
  }

  return (
    <div className="max-h-[80vh] max-w-[350px] space-y-5 overflow-y-auto px-3 py-5">
      {radios.map((radio) => (
        <Station
          name={radio.name}
          key={`${radio.stationuuid}`}
          isFavorite={radio.isFavorite}
          onClick={() => addRadioToFavorite(radio)}
          fallBack={`Station - ${radio.stationuuid}`}
        />
      ))}
    </div>
  )
}
