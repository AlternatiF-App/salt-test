import { forwardRef } from "react"
import cx from 'classnames'

type Ref = HTMLSpanElement
type textVariant = 'primary' | 'secondary'
type textDecoration = 'underline' | 'bold' | 'semibold' | 'italic' | ''
type textSize = 'banner' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface TextOptions {
  variant?: textVariant
  decoration?: textDecoration
  size?: textSize
}

export type TextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & TextOptions;

const getVariant = (variant: textVariant) => {
  switch (variant) {
    case 'primary':
      return 'text-salt-black';
    case 'secondary':
      return 'text-white';
  }
}

const getDecoration = (decoration: textDecoration) => {
  switch (decoration) {
    case 'underline':
      return 'underline'
    case 'bold':
      return 'font-bold'
    case 'semibold':
      return 'font-semibold'
    case 'italic':
      return 'italic'
  }
}

const getSize = (size: textSize) => {
  switch (size) {
    case 'banner':
      return 'lg:text-4xl 2xl:text-5xl'
    case 'h1':
      return 'text-2xl'
    case 'h2':
      return 'text-xl'
    case 'h3':
      return 'text-lg lg:text-sm xl:text-base 2xl:text-lg'
    case 'h4':
      return 'text-base'
    case 'h5':
      return 'text-xs 2xl:text-sm'
    case 'h6':
      return 'text-xs'
  }
}

const CustomText = forwardRef<Ref, TextProps>((props, ref) => {
  const {
    variant = 'primary',
    size = 'banner',
    decoration = '',
    className,
    children,
    ...rest
  } = props

  const merged = cx(
    getVariant(variant),
    getDecoration(decoration),
    getSize(size),
    className,
    'block'
  )

  return (
    <>
      <span
        ref={ref}
        className={merged}
        {...rest}
      >
        { children }
      </span>
    </>
  )
})

CustomText.displayName = "CustomText"
export default CustomText
