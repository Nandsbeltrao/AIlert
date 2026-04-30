interface Props {
  search: string
  setSearch: (value: string) => void
}

function Search({ search, setSearch }: Props) {
  return (
    <div className="search-container">
      <input 
        type="text"
        placeholder="buscar tipo de apoio ou localização..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="search-tags">
        <span className="tag">Emergência</span>
        <span className="tag">Apoio emocional</span>
        <span className="tag">Jurídico</span>
        <span className="tag">Abrigo</span>
      </div>
    </div>
  )
}

export default Search