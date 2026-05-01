import { useState, useEffect } from 'react'
import ResourceCard from './ResourceCard'
import useGeolocation from '../hooks/useGeolocation'
import { fetchNearbyResources } from '../services/resources'

interface Resource {
  id: string
  name: string
  description: string
  action: string
  color: string
}

interface Props {
  search: string
}

function ResourceList({ search }: Props) {
  const { location, loading: locationLoading } = useGeolocation()
  const [resources, setResources] = useState<Resource[]>([
    { id: 'cvv', name: 'CVV · 188', description: 'Ligação gratuita 24h', action: 'ligar', color: '#7C3AED' },
    { id: '180', name: 'Ligue 180', description: 'Central de atendimento à mulher', action: 'ligar', color: '#D85A30' },
    { id: 'deam', name: 'Delegacia da Mulher', description: 'Busque a mais próxima', action: 'ver', color: '#1D9E75' },
  ])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (location) {
      setLoading(true)
      fetchNearbyResources(location.latitude, location.longitude)
        .then(data => {
          setResources(data)
          setLoading(false)
        })
    }
  }, [location])

  const filtered = resources.filter(resource =>
    resource.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="resource-list">
      <p className="resource-list-label">
        {locationLoading ? 'localizando...' : 'recursos próximos'}
      </p>
      {loading && <p className="resource-loading">Buscando recursos perto de você...</p>}
      {filtered.map(resource => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  )
}

export default ResourceList