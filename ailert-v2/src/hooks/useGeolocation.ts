import { useState, useEffect } from 'react'

interface Location {
  latitude: number
  longitude: number
}

interface GeolocationState {
  location: Location | null
  error: string | null
  loading: boolean
}

function useGeolocation(): GeolocationState {
  const [location, setLocation] = useState<Location | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocalização não suportada neste dispositivo.')
      setLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
        setLoading(false)
      },
      (err) => {
        setError('Não foi possível obter sua localização.')
        setLoading(false)
      }
    )
  }, [])

  return { location, error, loading }
}

export default useGeolocation