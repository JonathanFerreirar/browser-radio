import React from 'react'

import { Icons } from '@/app/icons'
import { Button } from '@/primitive/ui/button'

type StationProps = {
  title: string
  isCheck?: boolean
}

const Station = ({ title, isCheck }: StationProps) => {
  return (
    <div className="relative h-auto">
      <Button className="w-full justify-start p-4 py-6 outline outline-1 outline-secondary hover:outline-[3px]">
        {title}
      </Button>
      {isCheck && (
        <Icons.check className="absolute bottom-1/2 right-3 translate-y-1/2 text-white" />
      )}
    </div>
  )
}

export default Station
