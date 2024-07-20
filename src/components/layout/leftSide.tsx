import { Icons } from '@/app/icons'

import { RadiosList } from './fragments/radiosList'
import { RadiosSearch } from './fragments/radiosSearch/radiosSearch'

const LeftSide = async () => {
  return (
    <div className="relative h-screen w-full  space-y-4 bg-primary lg:block lg:max-w-[350px]">
      <div className="flex w-full items-end justify-end px-2 py-1">
        <Icons.burgue size={30} className="text-secondary" />
      </div>
      <div className="px-3">
        <RadiosSearch />
      </div>
      <RadiosList />
    </div>
  )
}

export default LeftSide
