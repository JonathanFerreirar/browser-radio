import { render, screen } from '@testing-library/react'

import Station from '@/components/station/station'

const MOCK_DATA = {
  name: 'Jonathan Station',
  fallBack: 'Jonathan rodrigo',
}

describe('Station Component', () => {
  it('should be able to render component correctly', () => {
    render(<Station name={MOCK_DATA.name} fallBack={MOCK_DATA.fallBack} />)

    const containerElement = screen.getByTestId('test_station')

    expect(containerElement).toBeInTheDocument()
  })

  it('Should be able to show the name when it is not an empty string.', () => {
    render(<Station name={MOCK_DATA.name} fallBack={MOCK_DATA.fallBack} />)

    const stationName = screen.getByTestId('test_station_name')

    expect(stationName).toBeInTheDocument()
    expect(stationName).toHaveTextContent(MOCK_DATA.name)
    expect(stationName).not.toHaveTextContent(MOCK_DATA.fallBack)
  })

  it('should be able to show fallBack when name is empty string', () => {
    render(<Station name="" fallBack={MOCK_DATA.fallBack} />)

    const stationName = screen.getByTestId('test_station_name')

    expect(stationName).toBeInTheDocument()
    expect(stationName).toHaveTextContent(MOCK_DATA.fallBack)
    expect(stationName).not.toHaveTextContent(MOCK_DATA.name)
  })

  it('should be able to show favorite icon when isFavorite is true', () => {
    render(<Station name="" isFavorite fallBack={MOCK_DATA.fallBack} />)

    const favoriteIcons = screen.getByTestId('test_is_favorites')
    const notFavoriteIcons = screen.queryByTestId('test_is_not_favorites')

    expect(favoriteIcons).toBeInTheDocument()
    expect(notFavoriteIcons).toBeNull()
  })

  it('should be able to show not favorite icon when isFavorite is false', () => {
    render(<Station name="" isFavorite={false} fallBack={MOCK_DATA.fallBack} />)

    const favoriteIcons = screen.queryByTestId('test_is_favorites')
    const notFavoriteIcons = screen.getByTestId('test_is_not_favorites')

    expect(notFavoriteIcons).toBeInTheDocument()
    expect(favoriteIcons).toBeNull()
  })
})
