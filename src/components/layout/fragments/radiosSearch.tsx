'use client'

import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

import Search from '@/components/search/search'

export const RadiosSearch = () => {
  const pathname = usePathname()
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const [searchDefaultValue, setSearchDefaultValue] = React.useState('')

  const params = new URLSearchParams(searchParams)

  React.useEffect(() => {
    const defaultValue = params.get('radio')

    setSearchDefaultValue(defaultValue || '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSearch = useDebouncedCallback((term) => {
    if (term) {
      params.set('radio', term)
    } else {
      params.delete('radio')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <Search
      placeholder="Search here"
      defaultValue={searchDefaultValue}
      onChange={(e) => handleSearch(e.target.value)}
    />
  )
}
