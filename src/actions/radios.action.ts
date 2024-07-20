'use server'

import { apiFetch } from '@/api'
import { Radios } from '@/types/radios'

export const getRadios = async (): Promise<Radios> => {
  const data = await apiFetch('/search?limit=10&country=Brazil', {
    method: 'GET',
  })

  const jsonData = await data.json()

  return jsonData
}

type GetRadiosByNameProps = {
  name: string
  country: string
  language: string
}

export const getRadiosByName = async ({
  name,
}: GetRadiosByNameProps): Promise<Radios> => {
  const data = await apiFetch(`/search?limit=10&country=Brazil&name=${name}`, {
    method: 'GET',
  })

  const jsonData = await data.json()

  return jsonData
}
