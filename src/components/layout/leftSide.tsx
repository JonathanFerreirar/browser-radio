import { Icons } from '@/app/icons'
import Search from '@/components/search/search'

import { RadiosList } from './fragments/radiosList'

const LeftSide = async () => {
  return (
    <div className="relative h-screen w-[400px] space-y-4 bg-primary">
      <div className="flex w-full items-end justify-end px-2 py-1">
        <Icons.burgue size={30} className="text-secondary" />
      </div>
      <div className="px-3">
        <Search placeholder="Search here" />
      </div>
      <RadiosList />
    </div>
  )
}

export default LeftSide
