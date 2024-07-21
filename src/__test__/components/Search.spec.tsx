import { render, screen } from '@testing-library/react'

import Search from '@/components/search/search'

const PLACEHOLDER = 'placeholder test'

describe('Search Component', () => {
  it('should be able to render component correctly', () => {
    render(<Search />)

    const containerElement = screen.getByTestId('test_search_component')

    expect(containerElement).toBeInTheDocument()
  })

  it('should be able to render component with correctly placeholder', () => {
    render(<Search placeholder={PLACEHOLDER} />)

    const containerElement = screen.getByTestId('test_search_component')

    expect(containerElement).toHaveProperty('placeholder', PLACEHOLDER)
  })
})
