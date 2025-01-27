import { Icons } from '@/app/icons'

import { ErrorBoundary } from '../errorBoundary'
import { RadiosList } from '../radios/radiosList'
import { RadiosSearch } from '../radios/radiosSearch/radiosSearch'

const LeftSide = async () => {
  return (
    <div className="relative hidden h-screen  w-full space-y-4 bg-primary lg:block lg:max-w-[350px]">
      <div className="flex w-full items-end justify-end px-2 py-1">
        <Icons.burgue size={30} className="text-secondary" />
      </div>
      <div className="px-3">
        <ErrorBoundary errorMessage="erro ao renderizar search">
          <RadiosSearch />
        </ErrorBoundary>
      </div>
      <RadiosList />
    </div>
  )
}

export default LeftSide
