'use client'

import { Input, InputProps } from '@/primitive/ui/input'

type SearchProps = InputProps

const Search = ({ ...props }: SearchProps) => {
  return (
    <Input
      {...props}
      className={props.className}
      placeholder={props.placeholder}
      data-testid="test_search_component"
    />
  )
}

export default Search
