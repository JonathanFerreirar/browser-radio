import { IconBaseProps } from 'react-icons'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { FaCheck, FaPlay, FaSearch, FaStop, FaTrash } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiPencilFill } from 'react-icons/ri'

import { cn } from '@/lib/utils'

export const Icons = {
  burgue: GiHamburgerMenu,
  check: FaCheck,
  pencil: RiPencilFill,
  trash: FaTrash,
  search: FaSearch,
  play: FaPlay,
  stop: FaStop,
  loading: ({ ...props }: IconBaseProps) => {
    return (
      <AiOutlineLoading3Quarters
        {...props}
        className={cn('animate-spin', props.className)}
      />
    )
  },
}
