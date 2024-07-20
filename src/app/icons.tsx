import { IconBaseProps } from 'react-icons'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { BsStar, BsStarFill } from 'react-icons/bs'
import {
  FaCheck,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaPlay,
  FaSearch,
  FaStop,
  FaTrash,
} from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiPencilFill } from 'react-icons/ri'

import { cn } from '@/lib/utils'

export const Icons = {
  burgue: GiHamburgerMenu,
  arrowLeft: FaLongArrowAltLeft,
  arrowRight: FaLongArrowAltRight,
  check: FaCheck,
  pencil: RiPencilFill,
  trash: FaTrash,
  search: FaSearch,
  favorite: BsStarFill,
  noFavorite: BsStar,
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
