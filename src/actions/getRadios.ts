'use server'

import { apiFetch } from '@/api'
import { Radios } from '@/types/radios'

export const getRadios = async (): Promise<Radios> => {
  const data = await apiFetch('/search?limit=30', {
    method: 'GET',
  })

  const jsonData = await data.json()

  return jsonData
}
