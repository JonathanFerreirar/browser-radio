import React from 'react'

import { Icons } from '@/app/icons'

export const Sonners = {
  favorited: () => (
    <div className="hidden max-w-[200px] items-center justify-center gap-3 lg:flex">
      <Icons.favorite className="text-white lg:text-black" />
      <span className="text-xs font-semibold text-white lg:text-black">
        Adicionado aos favoritos
      </span>
    </div>
  ),
  unfavorited: () => (
    <div className="hidden max-w-[200px] items-center justify-center gap-3 rounded-lg lg:flex">
      <Icons.noFavorite className="text-red-500  lg:text-red-900" />
      <span className="text-xs font-semibold text-red-500 lg:text-red-900">
        Item removido dos favoritos
      </span>
    </div>
  ),
}
