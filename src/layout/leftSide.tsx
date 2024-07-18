import React from 'react'

import { Icons } from '@/app/icons'
import Search from '@/components/search/search'
import Station from '@/components/station/station'

const LeftSide = () => {
  return (
    <div className="relative h-screen w-1/3 space-y-4 bg-primary">
      <div className="flex w-full items-end justify-end px-2 py-1">
        <Icons.burgue size={30} className="text-secondary" />
      </div>
      <div className="px-3">
        <Search placeholder="Search here" />
      </div>
      <div className="px-3">
        <Station title="Sertanejo Brasil" />
      </div>
    </div>
  )
}

export default LeftSide
