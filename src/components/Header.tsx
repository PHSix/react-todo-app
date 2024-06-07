import { useState } from 'react'
import { useColorMode } from '@chakra-ui/react'
import sunSvg from '@/assets/sun.svg'
import moonSvg from '@/assets/moon.svg'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()

  function toggle() {
    toggleColorMode()
  }
  return (
    <header className="w-full flex flex-row justify-between items-center p-2">
      <div className="text-2xl italic font-thin">TODO</div>
      <img
        className="cursor-pointer"
        width={20}
        height={20}
        onClick={toggle}
        src={colorMode === 'dark' ? sunSvg : moonSvg}
      />
    </header>
  )
}
