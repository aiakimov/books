import MoonIcon from '@/images/icons/moonIcon'
import SunIcon from '@/images/icons/sunIcon'
import useThemeStore from '@/stores/useThemeStore'
import { useEffect, useState } from 'react'

const ThemeButton = () => {
  const { isDarkTheme, setTheme } = useThemeStore()

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDarkTheme])
  return (
    <button
      className=" text-gray-900 dark:text-gray-100 p-3 rounded-xl bg-gray-100 dark:bg-gray-900"
      onClick={() => setTheme(!isDarkTheme)}
    >
      {isDarkTheme ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default ThemeButton
