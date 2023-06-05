import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type TThemeStore = {
  theme: boolean
  setTheme: (arg: boolean) => void
}

const useThemeStore = create<TThemeStore>()(
  devtools((set, get) => ({
    theme: true,
    setTheme: (arg: boolean) =>
      set({
        theme: arg,
      }),
  }))
)

export default useThemeStore
