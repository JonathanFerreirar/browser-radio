'use client'

import React from 'react'

import { useFavorites } from '@/context/favorites'
import { useRadios } from '@/context/radios'
import { Radio } from '@/types/radios'

export const useRadiosList = () => {
  const { addFavorite } = useFavorites()

  const [page, setPage] = React.useState(15)

  const { radios, updateRadio, addRadioByOffset } = useRadios()

  const handlePagination = async () => {
    await addRadioByOffset(page)
    setPage(page + 15)
  }

  const addRadioToFavorite = (radio: Radio) => {
    addFavorite(radio)
    updateRadio(radio.stationuuid, { isFavorite: true })
  }

  return {
    radios,
    handlePagination,
    addRadioToFavorite,
  }
}
