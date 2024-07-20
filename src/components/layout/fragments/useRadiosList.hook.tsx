'use client'

import React from 'react'
import { toast } from 'sonner'

import { Sonners } from '@/components/sonners'
import { useFavorites } from '@/context/favorites'
import { useRadios } from '@/context/radios'
import { Radio } from '@/types/radios'

export const useRadiosList = () => {
  const { addFavorite, removeFavorite } = useFavorites()

  const [page, setPage] = React.useState(15)

  const { radios, updateRadio, addRadioByOffset } = useRadios()

  const handlePagination = async () => {
    await addRadioByOffset(page)
    setPage(page + 15)
  }

  const addRadioToFavorite = (radio: Radio) => {
    if (radio.isFavorite) {
      removeFavorite(radio.stationuuid)
      updateRadio(radio.stationuuid, { isFavorite: false })

      return toast(<Sonners.unfavorited />, {
        duration: 700,
      })
    }

    addFavorite(radio)
    updateRadio(radio.stationuuid, { isFavorite: true })

    toast(<Sonners.favorited />, {
      duration: 700,
    })
  }

  return {
    radios,
    handlePagination,
    addRadioToFavorite,
  }
}
