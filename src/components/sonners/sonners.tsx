import React from 'react'

import { Icons } from '@/app/icons'

export const Sonners = {
  favorited: () => (
    <div className="flex max-w-[200px] items-center justify-center gap-3 bg-white p-3">
      <Icons.favorite className="text-green-700" />
      <span className="text-xs font-semibold text-green-700">
        Adicionado aos favoritos
      </span>
    </div>
  ),
  unfavorited: ({
    message = '  Item removido dos favoritos',
  }: {
    message?: string
  }) => (
    <div className="flex max-w-[200px] items-center justify-center gap-3 rounded-lg bg-white p-3">
      <Icons.noFavorite className="text-red-500  lg:text-red-900" />
      <span className="text-xs font-semibold text-red-500 lg:text-red-900">
        {message}
      </span>
    </div>
  ),
  error: ({
    message = '  Item removido dos favoritos',
  }: {
    message?: string
  }) => (
    <div className="flex max-w-[200px] items-center justify-center gap-3 rounded-lg bg-white p-3">
      <Icons.warning className="text-red-500  lg:text-red-900" />
      <span className="text-xs font-semibold text-red-500 lg:text-red-900">
        {message}
      </span>
    </div>
  ),
}
