'use client'

import React from 'react'
import { useDebouncedCallback } from 'use-debounce'

import { getRadiosByName } from '@/actions/radios.action'
import { useRadios } from '@/context/radios'
import { useAddQueryOnUrl } from '@/hooks/useAddQueryOnUrl'
import { Radios } from '@/types/radios'

export const useRadioSearch = () => {
  const { setSearchList } = useRadios()
  const [_, startTransition] = React.useTransition()
  const { startTerm, addTermOnQuery } = useAddQueryOnUrl('radio')

  const handleSearch = useDebouncedCallback((term) => {
    startTransition(async () => {
      addTermOnQuery(term)

      const radios = term ? await getRadiosByName(term) : ([] as Radios)

      setSearchList(radios)
    })
  }, 300)

  return {
    handleSearch,
    searchDefaultValue: startTerm,
  }
}
