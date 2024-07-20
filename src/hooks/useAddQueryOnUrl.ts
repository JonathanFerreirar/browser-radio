/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useAddQueryOnUrl = (queryName: string) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [startTerm, setStartTerm] = React.useState('')

  const { replace } = useRouter()

  const params = new URLSearchParams(searchParams)

  React.useEffect(() => {
    const termOnUrl = params.get(queryName) || ''
    setStartTerm(termOnUrl)
  }, [])

  const addTermOnQuery = (term: string) => {
    if (term) {
      params.set(queryName, term)
    } else {
      params.delete(queryName)
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return {
    startTerm,
    addTermOnQuery,
  }
}
