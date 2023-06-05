import Button from '@/components/base/Button'
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
    <Button secondary onClick={() => setTheme(!isDarkTheme)}>
      {isDarkTheme ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

export default ThemeButton
