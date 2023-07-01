import { useState, useEffect } from 'react'
const useAnimation = ({ country }) => {
  const [intervalId, setIntervalId] = useState(null)
  const [currentYear, setCurrentYear] = useState(1980)

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId)
    }

    if (currentYear < 2020) {
      const id = setInterval(() => {
        setCurrentYear((prevYear) => prevYear + 1)
      }, 500)

      setIntervalId(id)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [currentYear, country])

  return { currentYear, setCurrentYear }
}

export default useAnimation
