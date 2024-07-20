'use client'

import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

import { getRadiosByName } from '@/actions/radios.action'
import { useRadios } from '@/context/radios'
import { Radios } from '@/types/radios'

export const useRadioSearch = () => {
  const pathname = usePathname()
  const { replace } = useRouter()
  const { setSearchList } = useRadios()
  const searchParams = useSearchParams()
  const [searchDefaultValue, setSearchDefaultValue] = React.useState('')

  const [_, startTransition] = React.useTransition()

  const params = new URLSearchParams(searchParams)

  React.useEffect(() => {
    const defaultValue = params.get('radio')
    setSearchDefaultValue(defaultValue || '')

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSearch = useDebouncedCallback((term) => {
    startTransition(async () => {
      if (term) {
        params.set('radio', term)
      } else {
        params.delete('radio')
      }
      replace(`${pathname}?${params.toString()}`)

      const radios = term ? await getRadiosByName(term) : ([] as Radios)

      setSearchList(radios)
    })
  }, 300)

  return {
    searchDefaultValue,
    handleSearch,
  }
}
