import React from 'react'

import { cn } from '@/lib/utils'
import { Skeleton } from '@/primitive/ui/skeleton'

type SkeletonWrapperProps = React.ComponentProps<typeof Skeleton> &
  React.PropsWithChildren & {
    isLoading: boolean
  }

export const SkeletonWrapper = ({
  children,
  isLoading,
  ...props
}: SkeletonWrapperProps) => {
  if (!isLoading) return children

  return (
    <Skeleton {...props} className={cn(props.className)}>
      <div className="opacity-0">{children}</div>
    </Skeleton>
  )
}
