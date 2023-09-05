import { forwardRef } from "react"
import cx from 'classnames'

type Ref = HTMLButtonElement
type buttonVariant = 'primary' | 'secondary' | 'outline-black' | 'outline-secondary' | 'disabled'

interface ButtonOptions {
  variant?: buttonVariant
}

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & ButtonOptions;

const getVariant = (variant: buttonVariant) => {
  switch (variant) {
    case 'primary':
      return 'bg-primary text-white';
    case 'secondary':
      return 'bg-white text-primary';
    case 'outline-black':
      return 'bg-white text-salt-black border border-salt-black'
    case 'outline-secondary':
      return 'bg-white text-salt-black border border-salt-black'
    case 'disabled':
      return 'bg-gray-400 text-black'
  }
}

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    className,
    children,
    ...rest
  } = props

  const merged = cx(
    getVariant(variant),
    className
  )

  return (
    <button
      ref={ref}
      className={merged}
      {...rest}
    >
      { children }
    </button>
  )
})

Button.displayName = "CustomButton"
export default Button
