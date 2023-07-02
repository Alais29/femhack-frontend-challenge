import { useState, useEffect } from 'react'

/**
 * Custom hook that increments the `currentYear` state value every 500 milliseconds until it reaches 2020
 * (which is the max year for the data) and returns the `currentYear` state value and a function to update it,
 * so that the animation can be reset.
 * @returns The function `useAnimation` returns an object with two properties: `currentYear` and
 * `setCurrentYear`.
 */
const useAnimation = () => {
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
  }, [currentYear])

  return { currentYear, setCurrentYear }
}

export default useAnimation
