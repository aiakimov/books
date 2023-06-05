export const getFromLocalStorage = (key: string) => {
  return localStorage.getItem(key)
}

export const setToLocalStorage = (key: string, item: any) => {
  localStorage.setItem(key, item)
}
