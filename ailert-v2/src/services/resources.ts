interface NearbyResource {
  id: string
  name: string
  description: string
  action: string
  color: string
  distance?: string
}

export async function fetchNearbyResources(
  latitude: number,
  longitude: number
): Promise<NearbyResource[]> {
  const radius = 5000 // 5km

  const query = `
    [out:json];
    (
      node["amenity"="police"]["name"~"Mulher|Delegacia da Mulher",i](around:${radius},${latitude},${longitude});
      node["amenity"="hospital"](around:${radius},${latitude},${longitude});
      node["amenity"="social_facility"](around:${radius},${latitude},${longitude});
    );
    out body;
  `

  try {
    const response = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      body: query,
    })

    const data = await response.json()

    const resources: NearbyResource[] = data.elements.map((el: any) => ({
      id: String(el.id),
      name: el.tags?.name || 'Recurso próximo',
      description: el.tags?.amenity === 'police' ? 'Delegacia' : 'Serviço de apoio',
      action: 'ver',
      color: el.tags?.amenity === 'police' ? '#1D9E75' : '#7C3AED',
    }))

    // Sempre inclui recursos fixos
    const fixedResources: NearbyResource[] = [
      { id: 'cvv', name: 'CVV · 188', description: 'Ligação gratuita 24h', action: 'ligar', color: '#7C3AED' },
      { id: 'ligue180', name: 'Ligue 180', description: 'Central de atendimento à mulher', action: 'ligar', color: '#D85A30' },
    ]

    return [...fixedResources, ...resources.slice(0, 3)]

  } catch (error) {
    // Se a API falhar, retorna recursos fixos
    return [
      { id: 'cvv', name: 'CVV · 188', description: 'Ligação gratuita 24h', action: 'ligar', color: '#7C3AED' },
      { id: '180', name: 'Ligue 180', description: 'Central de atendimento à mulher', action: 'ligar', color: '#D85A30' },
      { id: 'deam', name: 'Delegacia da Mulher', description: 'Busque a mais próxima', action: 'ver', color: '#1D9E75' },
    ]
  }
}