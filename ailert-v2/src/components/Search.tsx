function Search() {
    return(
        <div className="search-container">
            <input type="text" 
            placeholder="Buscar tipo de apoio ou localização..."
             className="search-input"
              />
            <div className="search-tags">
                <span className="tag">emergência</span>
                <span className="tag">apoio emocional</span>
                <span className="tag">jurídico</span>
                <span className="tag">abrigo</span>
            </div>
        </div>
    )
}

export default Search;