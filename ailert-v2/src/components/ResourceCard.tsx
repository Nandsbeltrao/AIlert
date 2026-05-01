interface Resource {
    id: string
    name: string
    description: string
    action: string 
    color: string 
}

interface Props {
    resource: Resource
}

function ResourceCard( { resource}: Props){
    return(
        <div className="resource-card">
            <div className="resource-icon">
                <div className="resource-dot" style={{ background: resource.color}}></div>
            </div>
            <div className="resource-info">
                <p className="resource-name">{resource.name}</p>
                <p className="resource-desc">{resource.description}</p>
            </div>
            <span className="resource-action">{resource.action}</span>
        </div>
    )
}

export default ResourceCard;