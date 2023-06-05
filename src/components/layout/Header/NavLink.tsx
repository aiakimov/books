import Link from 'next/link'

const NavLink = ({
  pathname,
  prettyName,
}: {
  pathname: string
  prettyName: string
}) => {
  return <Link href={pathname}>{prettyName}</Link>
}

export default NavLink
