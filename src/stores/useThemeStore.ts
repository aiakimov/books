import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type TThemeStore = {
  isDarkTheme: boolean
  setTheme: (arg: boolean) => void
}

const useThemeStore = create<TThemeStore>()(
  devtools((set, get) => ({
    isDarkTheme: true,
    setTheme: (arg: boolean) =>
      set({
        isDarkTheme: arg,
      }),
  }))
)

export default useThemeStore
