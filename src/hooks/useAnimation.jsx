import { useState, useEffect } from 'react'

const useAnimation = ({ country }) => {
  const [currentYear, setCurrentYear] = useState(1980)

  useEffect(() => {
    let intervalId = null

    if (currentYear < 2020) {
      intervalId = setInterval(() => {
        setCurrentYear((prevYear) => prevYear + 1)
      }, 500)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [country, currentYear])

  return { currentYear, setCurrentYear }
}

export default useAnimation
