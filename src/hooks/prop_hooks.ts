import { useState } from 'react'

/**
 * 封装disable属性
 * */
export const useDisableSetter = function(): [boolean, (() => void)] {
  const [available, setAvailable] = useState(false)
  return [
    available,
    () => {
      setAvailable(!available)
    }
  ]
}
