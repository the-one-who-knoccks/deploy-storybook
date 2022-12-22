import { ComponentProps as CProps } from '@stitches/react'

import { ElementType } from 'react'

export type ComponentProps<T> = CProps<T> & {
  as: ElementType
}
