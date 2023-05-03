const btnsAvisos = document.querySelector("#btnsAvisos")
const btnAddAviso = document.querySelector(".btnAddAviso")
const dialogAddAviso = document.getElementById("dialogAddAviso")
const fecharDialogAddAviso = document.querySelector(".fecharDialogAddAviso")
const confirmarNovoAviso = document.querySelector("#confirmarNovoAviso")
let inputTitleAviso = document.getElementById("inputTitleAviso")
let inputContentAviso = document.getElementById("inputContentAviso")



btnAddAviso.addEventListener("click", () =>{
 dialogAddAviso.showModal()
})

fecharDialogAddAviso.addEventListener("click", () =>{
 dialogAddAviso.close()
})

confirmarNovoAviso.addEventListener("click", () =>{
 dialogAddAviso.close()
 location.reload();
})

 const botoes = document.querySelectorAll('.btnAviso');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    // Cria um elemento de diálogo
    const dialogo = document.createElement('dialog');
    dialogo.classList.add("dialogAddAviso")
    
    const fecharDialogUnico = document.createElement('button')
    fecharDialogUnico.classList.add("confirmarNovoAviso")
    fecharDialogUnico.innerText = "fechar"
    // Define o conteúdo do diálogo como o conteúdo do botão
    dialogo.textContent = botao.textContent;

    // Adiciona o diálogo ao documento
    dialogo.appendChild(fecharDialogUnico)
    document.body.appendChild(dialogo);

    // Exibe o diálogo
    dialogo.showModal();
    
    fecharDialogUnico.onclick = () =>{
     dialogo.close()
    }
  });
});