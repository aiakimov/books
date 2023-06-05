import { NAVLINKS } from '@/constants/navigation'
import NavLink from './NavLink'

const Navigation = () => {
  return (
    <div className="flex items-center gap-5 text-xl">
      {NAVLINKS.map((item, index) => {
        return (
          <NavLink
            pathname={item.pathname}
            prettyName={item.prettyName}
            key={index + item.prettyName}
          />
        )
      })}
    </div>
  )
}

export default Navigation
