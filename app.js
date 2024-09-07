function pesquisar(){
    

let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value

console.log(campoPesquisa)

let resultados = ""

for(let dado of dados) {
    if (dado.titulo.includes(campoPesquisa)){
        resultados += `
    <div class="item-resultado">
        <h2>
            <a href=${dado.social} target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
    </div>`;
    }
}

section.innerHTML = resultados    
}