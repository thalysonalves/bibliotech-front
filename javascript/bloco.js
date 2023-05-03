let inputNovaTarefa = document.querySelector('#inputNovaTarefa');
let btnAddTarefa = document.querySelector('#btnAddTarefa');
let listaTarefa = document.querySelector('#listaTarefa');


btnAddTarefa.addEventListener('click', (e) => {
    let tarefa = {
        nome: inputNovaTarefa.value,
        id: gerarId(),
    }
    adicionarTarefa(tarefa);
});

function gerarId(){
    return Math.floor(Math.random() * 3000);
}

function adicionarTarefa(tarefa){
    let li =  criarTagLI(tarefa);
    listaTarefa.appendChild(li);
    inputNovaTarefa.value = '';
}

function criarTagLI(tarefa){
    if(inputNovaTarefa.value !== ""){
        let li = document.createElement('li');

    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div');

    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcao');
    btnEditar.innerHTML = ' <i class="bx bxs-edit" ></i>'
    btnEditar.setAttribute('onclick', 'edita('+tarefa.id+')');

    btnEditar.onclick = () =>{
        let newText = prompt("digite um novo texto")

        span.innerText = newText
    
    }    

    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnAcao');
    btnExcluir.innerHTML = ' <i class="bx bx-trash" ></i>'
    btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')');
    
    btnExcluir.onclick = () =>{
        li.style.display = "none"
    }

    let iconEdit = document.createElement("ion-icon")
    iconEdit.name = "create-outline"
    iconEdit.style.color = "#fff"
    iconEdit.style.height = "45%"
    iconEdit.style.width = "45%"
    
    let iconDel = document.createElement("ion-icon")
    iconDel.name = "trash-outline"
    iconDel.style.color = "#fff"
    iconDel.style.height = "45%"
    iconDel.style.width = "45%"
    
    btnEditar.appendChild(iconEdit)
    btnExcluir.appendChild(iconDel)


    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);
    return li;
    }
}

function editar(){
    // alert(idTarefa);

    
}


function excluir(idTarefa){
    // alert(idTarefa);


}