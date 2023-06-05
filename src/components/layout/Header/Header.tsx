import Navigation from './Navigation'
import ThemeButton from './ThemeButtton'

const Header = () => {
  return (
    <header className="w-full flex sticky top-0 py-3 px-6">
      <Navigation />
      <ThemeButton />
    </header>
  )
}

export default Header
