import ResourceCard from "./ResourceCard";

const resources = [
    {
        id: 1,
        name: 'CVV · 188',
        description: 'Ligação gratuita 24h',
        action: 'ligar',
        color: '#7C3AED'
    },

    {
        id: 2,
        name: 'Delegacia da Mulher',
        description: '2,3 km · Aberta agora ',
        action: 'ver',
        color: '#1D9E75'
    },

    {
        id: 1,
        name: 'Ligue 180',
        description: 'Central de atendimento à mulher',
        action: 'ligar',
        color: '#D85A30'
    }


]

function ResourceList() {
    return(
        <div className="resource-list">
            <p className="resource-list-label">recursos próximos</p>{resources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
            ))}
        </div>
    )
}

export default ResourceList;