//this is a theme toggle button to toggle between dark and light theme


'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'  //this is going to give a set theme function

import { Button } from './ui/button'
import {MoonIcon, SunIcon} from '@radix-ui/react-icons'

export default function ThemeToggle(){
    const {setTheme, resolvedTheme } = useTheme() //this is the function, it helps use set the theme and the resolved theme 
    const [ mounted, setMounted ] = useState(false)

  useEffect(() => {
    setMounted(true)  //this function sets mounted to true for when it first runs
  }, [])

  if (!mounted) {
    return null
  }

  return ( //if it is mounted then we know we are on the client side and we will return this button 
    <Button       // the shadcn button 
        size='sm'
        variant='ghost'  // it doesn't have any background unless we hover over it
        onClick={()=>{
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
        }}   
    >
        {resolvedTheme === 'dark' ? (
            <SunIcon className="size-4 text-orange-300" />
        ) : (
            <MoonIcon className="size-4 text-sky-950" />
        )}
        <span className="sr-only">Toggle theme</span>

    </Button>
  )

}