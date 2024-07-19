import React from 'react'

import { Icons } from '@/app/icons'
import { cn } from '@/lib/utils'
import { Button, ButtonProps } from '@/primitive/ui/button'

type StationProps = {
  name: string
  isFavorite?: boolean
  fallBack: string
} & ButtonProps

const Station = ({ name, fallBack, isFavorite, ...props }: StationProps) => {
  const displayName = name?.trim() === '' ? fallBack : name

  return (
    <div className="relative h-auto">
      <Button
        {...props}
        className={cn(
          'w-full justify-start  p-4 py-6 outline outline-1 outline-secondary hover:outline-[3px]',
          props.className,
        )}
      >
        <span className="max-w-[90%] truncate">{displayName}</span>
      </Button>
      {isFavorite && (
        <Icons.check className="absolute bottom-1/2 right-3 translate-y-1/2 text-white" />
      )}
    </div>
  )
}

export default Station
