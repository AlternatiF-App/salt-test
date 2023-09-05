import { SyntheticEvent } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

interface InputWithLabelProps {
  label: string
  type: string
  placeholder: string
  onChange: Function
  showPassword?: boolean
  handleShowPassword?: () => void
}

const InputWithLabel = (props: InputWithLabelProps) => {
  const { label, type, placeholder, onChange, showPassword, handleShowPassword } = props

  return (
    <div>
      <label className='font-semibold text-sm 2xl:text-base'>
        { label }
      </label>
      <div className='mt-2 relative'>
        <input
          className='outline-none px-4 py-2 border border-secondary rounded-lg w-full text-sm 2xl:text-base'
          onChange={(e: SyntheticEvent) => {
            const event = e.target as HTMLInputElement
            onChange(event.value)
          }}
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
        />
        {
          type === 'password' && (
            showPassword
              ? <HiEyeOff onClick={() => handleShowPassword && handleShowPassword()}
                size={24} className='absolute top-2 right-2.5 text-third cursor-pointer' />
              : <HiEye onClick={() => handleShowPassword && handleShowPassword()}
                size={24} className='absolute top-2 right-2.5 text-third cursor-pointer' />
          )
        }
      </div>
    </div>
  )
}

export default InputWithLabel
