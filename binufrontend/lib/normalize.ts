import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function normalizeToArray<T>(input: any): T[] {
  if (!input) return []

  // If already array
  if (Array.isArray(input)) return input

  // Common API pattern: { data: ... }
  if (input?.data) {
    return normalizeToArray<T>(input.data)
  }

  // Object → array of values
  if (typeof input === 'object') {
    return Object.values(input)
  }

  return []
}
