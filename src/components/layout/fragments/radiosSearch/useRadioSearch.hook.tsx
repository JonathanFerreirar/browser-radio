'use client'

import React from 'react'
import { toast } from 'sonner'
import { useDebouncedCallback } from 'use-debounce'

import { getRadiosByName } from '@/actions/radios.action'
import { Sonners } from '@/components/sonners'
import { useRadios } from '@/context/radios'
import { useAddQueryOnUrl } from '@/hooks/useAddQueryOnUrl'
import { Radios } from '@/types/radios'

export const useRadioSearch = () => {
  const { setSearchList } = useRadios()
  const [_, startTransition] = React.useTransition()
  const { startTerm, addTermOnQuery } = useAddQueryOnUrl('radio')

  React.useEffect(() => {
    if (startTerm) {
      const getStartTerm = async () => {
        const radios = await getRadiosByName(startTerm)

        if (radios.length > 0) {
          toast(<Sonners.error message="no result for this search" />, {
            duration: 1500,
            position: 'top-right',
          })
        }

        setSearchList(radios)
      }

      getStartTerm()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startTerm])

  const handleSearch = useDebouncedCallback((term) => {
    startTransition(async () => {
      addTermOnQuery(term)

      const radios = term ? await getRadiosByName(term) : ([] as Radios)

      if (radios.length === 0 && term) {
        toast(<Sonners.error message="no result for this search" />, {
          duration: 1500,
          position: 'top-right',
        })
      }

      setSearchList(radios)
    })
  }, 300)

  return {
    handleSearch,
    searchDefaultValue: startTerm,
  }
}
