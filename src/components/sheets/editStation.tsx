import React from 'react'

import { Favorite } from '@/context/favorites'
import { Button } from '@/primitive/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/primitive/ui/sheet'

import { EditStationForm } from '../forms/editStation'

type EditStationSheetProps = React.PropsWithChildren & {
  favorite: Favorite
}

export const EditStationSheet = ({
  children,
  favorite,
}: EditStationSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle>Edit Station</SheetTitle>
          <SheetDescription>
            Make changes to your station here. Click save when youre done.
          </SheetDescription>
        </SheetHeader>

        <EditStationForm favorite={favorite}>
          <div className="flex w-full items-center justify-between gap-5">
            <SheetClose asChild>
              <Button type="submit" className="w-full">
                Save changes
              </Button>
            </SheetClose>

            <SheetClose asChild>
              <Button
                type="button"
                className="w-1/3 bg-white"
                variant="outline"
              >
                Cancel
              </Button>
            </SheetClose>
          </div>
        </EditStationForm>
      </SheetContent>
    </Sheet>
  )
}
