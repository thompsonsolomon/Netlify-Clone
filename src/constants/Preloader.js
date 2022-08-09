import React, { useEffect } from 'react'

export default function Preloader() {
  const initialValue = "dark"
  const key = "theme"
  function UseLocalStorageState(key, initialValue) {
    const [value, setValue] = useState(() => {
      const persistedValue = localStorage.getItem(key);
      return persistedValue !== null ? persistedValue : initialValue
    })
    useEffect(() => {
      localStorage.setItem(key, value)
    }, [key, value]);
    return[ value, setValue]
  }
  return (
    <div>Preloader</div>
  )
}
