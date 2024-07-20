'use server'

import { apiFetch } from '@/api'
import { Radios } from '@/types/radios'

export const getRadios = async (offset = 0): Promise<Radios> => {
  const data = await apiFetch(
    `/search?limit=15&country=Brazil&offset=${offset}`,
    {
      method: 'GET',
    },
  )

  const jsonData = await data.json()

  return jsonData
}

export const getRadiosByName = async (name: string): Promise<Radios> => {
  const data = await apiFetch(`/search?limit=10&country=Brazil&name=${name}`, {
    method: 'GET',
  })

  const jsonData = await data.json()

  return jsonData
}
