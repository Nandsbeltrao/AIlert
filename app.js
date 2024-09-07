function busca() {
    // Obtém a seção HTML com o ID "pesquisa"
    let section = document.getElementById("pesquisa");
  
    // Obtém o valor do campo de busca e verifica se está vazio
    let campoBusca = document.getElementById("campo-busca").value.trim();
    
    if (!campoBusca) {
        section.innerHTML = "<p>Nada foi encontrado. Por favor, insira um caractere</p>";
        return;
    }

    campoBusca = campoBusca.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da busca
    let resultados = "";

    // Itera sobre cada dado na array 'dados'
    for (let dado of dados) {

        let titulo = dado.titulo.toLowerCase();
        let orientacao = dado.orientacao.toLowerCase();
        let mensagemDeConforto = dado.mensagemDeConforto.toLowerCase();
        let tags = dado.tags ? dado.tags.map(tag => tag.toLowerCase()).join(" ") : ""; // Certifique-se de que 'tags' é uma array e converta para string

        // Verifica se algum dos campos contém o texto buscado
        if (titulo.includes(campoBusca) || orientacao.includes(campoBusca) || mensagemDeConforto.includes(campoBusca) || tags.includes(campoBusca)) {
        
            // Constrói o HTML para cada resultado, formatando os dados do objeto 'dado'
            resultados += `
                <div class="resultadosItens">
                    <h1>${dado.titulo}</h1>
                    <p class="paragrafo">${dado.orientacao}</p>
                    <p class="paragrafo2">${dado.mensagemDeConforto}</p>
                    <a class="links" href="${dado.links}" target="_blank">Ameaças Legais | </a>
                    <a class="links" href="${dado.links}" target="_blank">Proteção Pessoal</a>
                    </div>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui o HTML gerado para a seção "pesquisa"
    section.innerHTML = resultados;
}
