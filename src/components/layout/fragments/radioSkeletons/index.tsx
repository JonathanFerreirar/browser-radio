import React from 'react'

import { Skeleton } from '@/primitive/ui/skeleton'

export const RadioSkeleton = () => {
  return (
    <div className="max-h-[80vh] space-y-5 px-3 py-5">
      {Array.from({ length: 15 }).map((_, index) => (
        <div className="relative size-auto" key={index}>
          <Skeleton className="w-full justify-start bg-primary p-4 py-6 outline outline-1 outline-secondary hover:outline-[3px]" />
          <Skeleton className="absolute bottom-1/2 left-4  h-[4px] w-[100px] translate-y-1/2 bg-secondary" />
        </div>
      ))}
    </div>
  )
}
