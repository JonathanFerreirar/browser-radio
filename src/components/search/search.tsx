import React from 'react'

import { Input, InputProps } from '@/primitive/ui/input'

type SearchProps = InputProps

const Search = ({ ...props }: SearchProps) => {
  return (
    <Input
      {...props}
      placeholder={props.placeholder}
      className={props.className}
    />
  )
}

export default Search
