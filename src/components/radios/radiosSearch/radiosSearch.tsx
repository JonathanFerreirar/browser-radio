'use client'

import Search from '@/components/search/search'

import { useRadioSearch } from './useRadioSearch.hook'

export const RadiosSearch = () => {
  const { handleSearch, searchDefaultValue } = useRadioSearch()

  return (
    <Search
      placeholder="Search here"
      defaultValue={searchDefaultValue}
      onChange={(e) => handleSearch(e.target.value)}
    />
  )
}
