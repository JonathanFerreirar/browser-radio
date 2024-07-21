import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const setStorage = (name: string, value: string) => {
  localStorage.setItem(name, value)
}

export const getStorage = (name: string) => {
  return localStorage.getItem(name)
}
