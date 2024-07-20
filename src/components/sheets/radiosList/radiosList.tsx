'use client'

import React from 'react'

import { Icons } from '@/app/icons'
import { ErrorBoundary } from '@/components/errorBoundary'
import { RadiosList } from '@/components/layout/fragments/radiosList'
import { RadiosSearch } from '@/components/layout/fragments/radiosSearch/radiosSearch'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/primitive/ui/sheet'

type EditStationSheetProps = React.PropsWithChildren

export const RadiosListSheet = ({ children }: EditStationSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        showCloseBtn={false}
        className="h-screen w-screen space-y-4  bg-primary px-0"
      >
        <SheetHeader className="flex w-full flex-col items-start justify-start px-3 py-2">
          <SheetTitle>
            <SheetClose className="flex items-center gap-2">
              <Icons.arrowLeft size={25} className="text-white" />
              <span className="text-base font-semibold text-white">
                Favorites
              </span>
            </SheetClose>
          </SheetTitle>

          <div className="w-full pt-5">
            <ErrorBoundary errorMessage="erro ao renderizar search">
              <RadiosSearch />
            </ErrorBoundary>
          </div>
        </SheetHeader>

        <RadiosList />
      </SheetContent>
    </Sheet>
  )
}
