import { Icons } from '@/app/icons'
import { Button } from '@/primitive/ui/button'

import { AudioPlayer } from '../audioPlayer'
import { SkeletonWrapper } from '../skeletonWrapper'

export const StationCardPlaySkeleton = () => {
  return (
    <div
      className={
        'flex w-full items-center justify-between rounded-sm border border-secondary bg-white px-1 py-5 sm:p-5'
      }
    >
      <div className="flex items-start gap-4">
        <SkeletonWrapper isLoading className="rounded-full">
          <AudioPlayer id="" isHls={false} src={''} />
        </SkeletonWrapper>
        <div className="flex flex-col items-start gap-2">
          <SkeletonWrapper isLoading className="max-h-4">
            <label
              aria-label="Name of station"
              className="max-sm:max-w-[150px] max-sm:truncate"
            >
              Skeleton
            </label>
          </SkeletonWrapper>
          <SkeletonWrapper isLoading className="max-h-4">
            <span className="max-sm:max-w-[150px] max-sm:truncate">
              Skeletong, tags
            </span>
          </SkeletonWrapper>
        </div>
      </div>

      <div className="flex w-full max-w-[100px] justify-between gap-2">
        <SkeletonWrapper isLoading>
          <Button size="icon" variant="ghost" aria-label="Edit Station">
            <Icons.pencil size={20} />{' '}
          </Button>
        </SkeletonWrapper>

        <SkeletonWrapper isLoading>
          <Button size="icon" variant="ghost">
            <Icons.trash size={20} />{' '}
          </Button>
        </SkeletonWrapper>
      </div>
    </div>
  )
}
