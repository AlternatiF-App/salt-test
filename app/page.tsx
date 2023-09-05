'use client'

import { useState } from "react"
import CustomText from "./components/CustomText"
import InputWithLabel from "./components/InputWithLabel"
import CustomButton from "./components/CustomButton"
import { AiOutlineReload } from 'react-icons/ai'
import { validateEmail, validatePassword } from './helpers/validator'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [show, setShow] = useState(false)
  const [isLoading, setIsloading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)

  const handleShowPassword = () => {
    setShow(!show)
  }

  const handleLogin = () => {
    setIsloading(true)
    if (validateEmail(email) && validatePassword(password)){
      toast.success('Anda masuk sebagai ' + email, { autoClose: 2000 })
    } else if (validateEmail(email) === false && validatePassword(password)) {
      toast.error('Format email yang anda masukkan salah', { autoClose: 2000 })
    } else if (validateEmail(email) && validatePassword(password) === false) {
      toast.error('Password yang anda masukkan kurang dari 8 karakter', { autoClose: 2000 })
    } else {
      toast.error('Email atau password yang anda masukkan salah', { autoClose: 2000 })
    }

    setTimeout(() => {
      setIsloading(false)
    }, 3000)
  }

  return (
    <>
      <div className='lg:flex h-screen w-full font-inter'>
        <ToastContainer/>
        <div className='hidden lg:block w-3/5 bg-primary h-full'>
          <div className='bg-white/40 lg:m-20 lg:px-14 lg:pt-20 lg:pb-16 xl:m-32 lx:px-16 xl:pt-24 xl:pb-20 2xl:m-44 2xl:px-[88px] 2xl:pt-[138px] 2xl:pb-[104px]'>
            <CustomText
              size='banner'
              variant='secondary'
              decoration='semibold'
              className='lg:leading-[42px] xl:leading-[45px] 2xl:leading-[57.6px]'
            >
              Lorem ipsum <br/> dolor si <br/> amet 
              <span className='text-salt-black block'>consectetur</span>
            </CustomText>
            <CustomText
              size='h3'
              variant='primary'
              className='mt-10 lg:w-[300px] 2xl:w-[347px] !leading-[27px]'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CustomText>
          </div>
        </div>
        <div className='w-full lg:w-2/5'>
          <div className='mt-[83px] lg:mx-6 lg:mt-16 xl:mx-16 xl:mt-28 2xl:mx-32 2xl:mt-[160px]'>
            <div className='px-6 lg:px-8'>
              <CustomText
                variant='primary'
                decoration='bold'
                className='text-[32px] md:text-3xl 2xl:text-[32px]'
              >
                Hello
              </CustomText>
              <CustomText
                size='h3'
                variant='primary'
              >
                Enter your email and password to login.
              </CustomText>
            </div>
            <div className='mt-12 px-6 block lg:hidden'>
              <CustomText
                size='h1'
                variant='primary'
                decoration='semibold'
              >
                Login
              </CustomText>
            </div>
            <div className='mt-6 lg:mt-[80px] px-6 lg:px-8 space-y-6'>
              <InputWithLabel
                label='Email'
                type='text'
                placeholder='Email'
                onChange={setEmail}
              />
              <InputWithLabel
                label='Password'
                type='password'
                placeholder='Password'
                onChange={setPassword}
                showPassword={show}
                handleShowPassword={handleShowPassword}
              />

              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2'>
                  <input
                    type='checkbox'
                    checked={remember}
                    onClick={() => setRemember(!remember)}
                    className='accent-primary'
                  />
                  <span className='block text-sm 2xl:text-base'>Remember me</span>
                </div>
                <span className='block underline text-sm 2xl:text-base'>Forgot password?</span>
              </div>

              <div className='grid grid-cols-2 gap-6'>
                <CustomButton
                  variant={isLoading ? 'disabled' : 'primary'}
                  disabled={isLoading}
                  onClick={() => handleLogin()}
                  type='submit'
                  className='w-full py-2 px-4 rounded-lg font-semibold text-sm 2xl:text-base flex justify-center items-center'
                >
                  { isLoading && <AiOutlineReload size={20} className='mr-2 animate-spin' /> }
                  { isLoading ? 'Please Wait' : 'Login' }
                </CustomButton>
                <CustomButton
                  variant='outline-black'
                  className='w-full py-2 px-4 rounded-lg font-semibold text-sm 2xl:text-base'
                >
                  Sign Up
                </CustomButton>
              </div>

              <div className='pt-6'>
                <CustomText
                  size='h5'
                  className='text-center'
                >
                  Or, login with
                </CustomText>
                <div className='mt-4 grid grid-cols-3 gap-4'>
                  <CustomButton
                    variant='outline-secondary'
                    className='w-full py-2 px-4 rounded-lg font-medium text-xs 2xl:text-sm'
                  >
                    Facebook
                  </CustomButton>
                  <CustomButton
                    variant='outline-secondary'
                    className='w-full py-2 px-4 rounded-lg font-medium text-xs 2xl:text-sm'
                  >
                    Linked In
                  </CustomButton>
                  <CustomButton
                    variant='outline-secondary'
                    className='w-full py-2 px-4 rounded-lg font-medium text-xs 2xl:text-sm'
                  >
                    Google
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
