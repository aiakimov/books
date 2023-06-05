export interface INavLink {
  prettyName: string
  pathname: string
}

export const NAVLINKS: INavLink[] = [
  { prettyName: 'HOME', pathname: '/' },
  { prettyName: 'BOOKS', pathname: '/books' },
]
