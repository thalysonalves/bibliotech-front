const corPendentes = "#FC400F"
const corEmprestados = "#E88919"
const livroShow = document.querySelector("#livroShow")

fetch("./json/dados.json").then((resposta) =>{
 resposta.json().then((dados) =>{
  dados.emprestimos.map((livro) =>{
  
const sectionLivrosUni = document.createElement("section")
sectionLivrosUni.classList.add("livroUni")


const divLivro = document.createElement("div")
divLivro.classList.add("livro")

const divFiltro = document.createElement("div")
divFiltro.classList.add("filtro")

if(livro.status == "1"){
    divFiltro.style.background = corEmprestados
    sectionLivrosUni.setAttribute("id", "emprestado")    
  }
if(livro.status == "2"){
  divFiltro.style.background = corPendentes
  sectionLivrosUni.setAttribute("id", "pendente")
}
const divInfo = document.createElement("div")
divInfo.classList.add("info")


const paragrafoNomeLivro = document.createElement("p")
paragrafoNomeLivro.innerText = livro.nomeDoLivro

const paragrafoTomboLivro = document.createElement("p")
paragrafoTomboLivro.innerText = livro.tomboDoLivro

const paragrafoNomeAluno = document.createElement("p")
paragrafoNomeAluno.innerText = livro.aluno

const paragrafoTurmaAluno = document.createElement("p")
paragrafoTurmaAluno.innerText = livro.turmaDoAluno

const paragrafoSerieAluno = document.createElement("p")
paragrafoSerieAluno.innerText = livro.serieDoAluno

const button = document.createElement("button")
button.classList.add("btnReceber")

const icon = document.createElement("img")
icon.src = "../img/verif.png"
icon.setAttribute("id", "imgConfirmeEntrega")


button.onclick = () => {
  sectionLivrosUni.classList.add('remove');
  
  if(sectionLivrosUni.style.opacity == 0){
    setTimeout(() => {
    livroShow.removeChild(sectionLivrosUni);
  }, 1000);
  }
}

divInfo.append(paragrafoNomeLivro, paragrafoTomboLivro, paragrafoNomeAluno, paragrafoTurmaAluno, paragrafoSerieAluno)
divLivro.append(divFiltro, divInfo)
button.appendChild(icon)
sectionLivrosUni.append(divLivro, button)

livroShow.appendChild(sectionLivrosUni)
  })
 })
})

// BARRA DE PESQUISA HISTORICO

const barraDePesquisaHistorico = document.querySelector('#search')
const livroUni = document.querySelector(".livroUni")
const infoParagrafos = document.querySelector(".info")
const livro = document.querySelector(".livro")

barraDePesquisaHistorico.addEventListener('input', function(event) {
  
  const inputValue = event.target.value.trim().toLowerCase()
  Array.from(livroShow.children)
  .filter(livroUnico => !livroUnico.textContent.toLowerCase().includes(inputValue)) 
  .forEach(livroUnico =>{
   livroUnico.style.display = "none"
  })
  
  Array.from(livroShow.children)
  .filter(livroUnico => livroUnico.textContent.toLowerCase().includes(inputValue)) 
  .forEach(livroUnico =>{
   livroUnico.style.display = "flex"
  })
 
});

// BOTÕES COM OS FILTROS
const filtroMenus = document.querySelectorAll(".divFiltroMenu")

const divFitroMenu = document.querySelector("#emprestado")

filtroMenus.forEach(filtroUnico => {
  filtroUnico.addEventListener("click", (filtroEscolhido)=>{
    switch(filtroEscolhido.target.id){
      case 'filtroPendente':
      case 'textPende':
      case 'corFiltroPendente':

      let emprestados = document.querySelectorAll("#emprestado")
      let pendentes = document.querySelectorAll("#pendente")
        
        emprestados.forEach(emprest =>{
          emprest.style.display = "none"
            pendentes.forEach(pende =>{
              pende.style.display = "flex"
            })
        })
        
        break;
      
      case 'filtroEmprestado':
      case 'textEmpre':
      case 'corFiltroEmprestado':
        
      let emprestado = document.querySelectorAll("#emprestado")
      let pendente = document.querySelectorAll("#pendente")
        
      emprestado.forEach(emprest =>{
        emprest.style.display = "flex"
          pendente.forEach(pende =>{
            pende.style.display = "none"
          })
      })
        break;
    }
  })
})