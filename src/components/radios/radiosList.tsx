'use client'

import InfiniteScroll from 'react-infinite-scroll-component'

import { ErrorBoundary } from '@/components/errorBoundary'
import Station from '@/components/station/station'

import { StationSkeleton } from '../skeletons/station'

import { useRadiosList } from './useRadiosList.hook'

export const RadiosList = () => {
  const { addRadioToFavorite, handlePagination, radios } = useRadiosList()

  return (
    <InfiniteScroll
      height="80vh"
      hasMore={true}
      next={handlePagination}
      loader={<StationSkeleton />}
      dataLength={radios.length}
      className="space-y-5 px-3 py-5"
    >
      {radios.map((radio) => (
        <ErrorBoundary
          key={`${radio.stationuuid}`}
          errorMessage="Erro to render radio station"
        >
          <Station
            name={radio.name}
            isFavorite={radio.isFavorite}
            onClick={() => addRadioToFavorite(radio)}
            fallBack={`Station - ${radio.stationuuid}`}
          />
        </ErrorBoundary>
      ))}
    </InfiniteScroll>
  )
}
