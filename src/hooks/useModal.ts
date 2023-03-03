import { useState } from 'react'

export default function useModal(): any {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = (): void => {
    setIsOpen(!isOpen)
  }
  return { isOpen, toggle }
}
