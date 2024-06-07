export function getObjectFromStorage<T extends object>(key: string): T {
  const item = localStorage.getItem(key)
  if (!item)
    throw new Error(`could not get ${key} from localStorage`)

  return JSON.parse(item)
}

export function syncObjectForStorage<T extends object>(key: string, obj: T) {
  localStorage.setItem(key, JSON.stringify(obj))
}
