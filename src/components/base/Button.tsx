const Button = ({
  children,
  onClick,
  primary = false,
  secondary = false,
  className = '',
}: {
  children: React.ReactNode
  onClick: () => void
  primary?: boolean
  secondary?: boolean
  className?: string
}) => {
  const classNameButton =
    className +
    ` ${
      primary
        ? 'py-2 px-3 bg-green-400 dark:bg-green-300'
        : secondary
        ? 'py-2 px-3 bg-blue-400 dark:bg-blue-300'
        : 'p-3 bg-gray-100 dark:bg-gray-900'
    } text-gray-100 dark:text-gray-200 rounded-xl transition-all hover:bg-opacity-80 dark:hover:bg-opacity-80`

  return (
    <button
      className={classNameButton}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
