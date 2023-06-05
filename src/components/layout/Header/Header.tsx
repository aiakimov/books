import useThemeStore from '@/stores/useThemeStore'
import { useEffect, useState } from 'react'

const Header = () => {
  const { theme, setTheme } = useThemeStore()

  
  useEffect(() => {
    if (theme) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  return (
    <header>
      <button
        className="dark:bg-slate-600 bg-red-300"
        onClick={() => setTheme(!theme)}
      >
        theme
      </button>
    </header>
  )
}

export default Header
