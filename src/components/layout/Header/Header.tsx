import Navigation from './Navigation'
import ThemeButton from './ThemeButtton'

const Header = () => {
  return (
    <header className="w-full bg-green-200 dark:bg-gray-500 flex sticky top-0 py-3 px-60 items-center justify-between">
      <Navigation />
      <ThemeButton />
    </header>
  )
}

export default Header
