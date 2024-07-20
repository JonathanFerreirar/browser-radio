import React from 'react'

import { Icons } from '@/app/icons'

export const Sonners = {
  favorited: () => (
    <div className="flex max-w-[200px] items-center justify-center gap-3">
      <Icons.favorite />
      <span className="text-xs font-semibold">Adicionado aos favoritos</span>
    </div>
  ),
  unfavorited: () => (
    <div className="flex max-w-[200px] items-center justify-center gap-3 rounded-lg">
      <Icons.noFavorite className="fill-red-900 text-red-900" />
      <span className="text-xs font-semibold text-red-900">
        Item removido dos favoritos
      </span>
    </div>
  ),
}
