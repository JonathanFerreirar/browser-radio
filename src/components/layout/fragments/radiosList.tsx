'use client'

import InfiniteScroll from 'react-infinite-scroll-component'

import Station from '@/components/station/station'

import { RadioSkeleton } from './radioSkeletons'
import { useRadiosList } from './useRadiosList.hook'

export const RadiosList = () => {
  const { addRadioToFavorite, handlePagination, radios } = useRadiosList()

  return (
    <InfiniteScroll
      height="80vh"
      hasMore={true}
      next={handlePagination}
      loader={<RadioSkeleton />}
      dataLength={radios.length}
      className="space-y-5 px-3 py-5"
    >
      {radios.map((radio) => (
        <Station
          name={radio.name}
          key={`${radio.stationuuid}`}
          isFavorite={radio.isFavorite}
          onClick={() => addRadioToFavorite(radio)}
          fallBack={`Station - ${radio.stationuuid}`}
        />
      ))}
    </InfiniteScroll>
  )
}
