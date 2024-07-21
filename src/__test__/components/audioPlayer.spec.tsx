/* eslint-disable @typescript-eslint/no-var-requires */
import { fireEvent, render, screen } from '@testing-library/react'

import { AudioPlayer } from '@/components/audioPlayer'
import * as AudioPlayerHooks from '@/components/audioPlayer/audioPlayer.hooks'

const MOCK_AUDIOPLAY = {
  isHls: false,
  id: 'test_audio_id',
  src: 'http://jpdofunk3.com.br:8038/stream',
}

jest.mock('@/components/audioPlayer/audioPlayer.hooks', () => ({
  useAudioPlayer: jest.fn(),
}))

const useAudioPlayerMock = AudioPlayerHooks.useAudioPlayer as jest.Mock

const mockTogglePlay = jest.fn()

describe('AudioPlayer Component', () => {
  it('should be able to render  component correctly', () => {
    useAudioPlayerMock.mockReturnValue({
      playingStationuuid: MOCK_AUDIOPLAY.id,
      togglePlay: jest.fn(),
      audioRef: { current: null },
    })

    render(<AudioPlayer {...MOCK_AUDIOPLAY} />)

    const containerElement = screen.getByTestId('test_audioPlayer')

    expect(containerElement).toBeInTheDocument()
  })

  it('should be able to render stop icon on button', () => {
    useAudioPlayerMock.mockReturnValue({
      playingStationuuid: MOCK_AUDIOPLAY.id,
      togglePlay: jest.fn(),
      audioRef: { current: null },
    })

    render(<AudioPlayer {...MOCK_AUDIOPLAY} />)

    const pauseButton = screen.getByTestId('test_audioPlayer_button_pause')
    const playButton = screen.queryByTestId('test_audioPlayer_button_play')

    expect(pauseButton).toBeInTheDocument()

    expect(playButton).not.toBeInTheDocument()
  })

  it('should be able to render play icon on button', () => {
    useAudioPlayerMock.mockReturnValue({
      playingStationuuid: 'test_mock_2',
      togglePlay: jest.fn(),
      audioRef: { current: null },
    })

    render(<AudioPlayer {...MOCK_AUDIOPLAY} />)

    const playButton = screen.getByTestId('test_audioPlayer_button_play')
    const pauseButton = screen.queryByTestId('test_audioPlayer_button_pause')

    expect(playButton).toBeInTheDocument()
    expect(pauseButton).not.toBeInTheDocument()
  })

  it('should be able to render stop icon when click on button', () => {
    useAudioPlayerMock.mockReturnValue({
      playingStationuuid: 'test_mock_2',
      togglePlay: mockTogglePlay,
      audioRef: { current: null },
    })

    render(<AudioPlayer {...MOCK_AUDIOPLAY} />)

    const containerElement = screen.getByTestId('test_audioPlayer')
    const playButton = screen.getByTestId('test_audioPlayer_button_play')

    fireEvent.click(containerElement)

    expect(playButton).toBeInTheDocument()
    expect(mockTogglePlay).toHaveBeenCalled()
    expect(mockTogglePlay).toHaveBeenCalledTimes(1)

    useAudioPlayerMock.mockReturnValue({
      playingStationuuid: MOCK_AUDIOPLAY.id,
      togglePlay: jest.fn(),
      audioRef: { current: null },
    })
    render(<AudioPlayer {...MOCK_AUDIOPLAY} />)
    const pauseButton = screen.getByTestId('test_audioPlayer_button_pause')

    expect(pauseButton).toBeInTheDocument()
  })
})
