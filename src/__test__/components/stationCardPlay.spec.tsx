import { fireEvent, render, screen } from '@testing-library/react'

import { StationCardPlay } from '@/components/stationCardPlay'
import { Favorite } from '@/context/favorites'

const MOCK_FAVORTIES: Favorite = {
  url: 'http://jpdofunk3.com.br:8038/stream',
  country: 'Brazil',
  url_resolved: 'http://jpdofunk3.com.br:8038/stream',
  name: 'test_station',
  stationuuid: 'test_stationuuid',
  tags: 'brazil, pop, funk, sertanejo',
  hls: 0,
}
const MOCK_REMOVE_RADION_FUNCTION = jest.fn()

describe(' Component', () => {
  it('should be able to render component correctly', () => {
    render(
      <StationCardPlay
        favorite={MOCK_FAVORTIES}
        removeRadioFromFavorite={MOCK_REMOVE_RADION_FUNCTION}
      />,
    )

    const containerElement = screen.getByTestId('test_StationCardPlay')

    expect(containerElement).toBeInTheDocument()
  })

  it('should be able to show name and tags propertys correctly', () => {
    render(
      <StationCardPlay
        favorite={MOCK_FAVORTIES}
        removeRadioFromFavorite={MOCK_REMOVE_RADION_FUNCTION}
      />,
    )

    const name = screen.getByTestId('test_StationCardPlay_name')
    const tags = screen.getByTestId('test_StationCardPlay_tags')

    expect(name).toBeInTheDocument()
    expect(name).toHaveTextContent(MOCK_FAVORTIES.name)
    expect(tags).toBeInTheDocument()
    expect(tags).toHaveTextContent(MOCK_FAVORTIES.tags)
  })

  it('should be able to show audioPayer component correctly', () => {
    render(
      <StationCardPlay
        favorite={MOCK_FAVORTIES}
        removeRadioFromFavorite={MOCK_REMOVE_RADION_FUNCTION}
      />,
    )

    const audioPlayer = screen.getByTestId('test_StationCardPlay_audioPayer')

    expect(audioPlayer).toBeInTheDocument()
  })

  it('should be able to show EditStationSheet component when click on pencial icon', () => {
    render(
      <StationCardPlay
        favorite={MOCK_FAVORTIES}
        removeRadioFromFavorite={MOCK_REMOVE_RADION_FUNCTION}
      />,
    )

    const editButton = screen.getByTestId('test_StationCardPlay_edit')

    fireEvent.click(editButton)

    const editStationSheet = screen.getByTestId('test_edit_station_sheet')

    expect(editButton).toBeInTheDocument()
    expect(editStationSheet).toBeInTheDocument()
  })

  it('should be able to trigger removeRadioFromFavorite function when click on button with trash icon', () => {
    render(
      <StationCardPlay
        favorite={MOCK_FAVORTIES}
        removeRadioFromFavorite={MOCK_REMOVE_RADION_FUNCTION}
      />,
    )

    const removeButton = screen.getByTestId('test_StationCardPlay_remove')

    fireEvent.click(removeButton)

    expect(removeButton).toBeInTheDocument()
    expect(MOCK_REMOVE_RADION_FUNCTION).toHaveBeenCalled()
    expect(MOCK_REMOVE_RADION_FUNCTION).toHaveBeenCalledTimes(1)
    expect(MOCK_REMOVE_RADION_FUNCTION).toHaveBeenCalledWith(
      MOCK_FAVORTIES.stationuuid,
    )
  })
})
