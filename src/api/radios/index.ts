import { useQuery } from '@tanstack/react-query'

import { getRadios } from '@/actions/radios.action'
import { Radios } from '@/types/radios'

export const useGetRadios = (offset = 0) => {
  return useQuery<Radios>({
    queryKey: ['radios', offset],
    queryFn: async () => {
      const data = await getRadios()

      return data
    },
  })
}
