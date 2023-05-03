function atualizarDatas() {
    const hoje = new Date();
  
    const data14DiasDepois = new Date(hoje.getTime() + 15 * 24 * 60 * 60 * 1000);
  
    const diaAtual = hoje.getDate().toString().padStart(2, '0');
    const mesAtual = (hoje.getMonth() + 1).toString().padStart(2, '0');
    const anoAtual = hoje.getFullYear();
  
    const dia14DiasDepois = data14DiasDepois.getDate().toString().padStart(2, '0');
    const mes14DiasDepois = (data14DiasDepois.getMonth() + 1).toString().padStart(2, '0');
    const ano14DiasDepois = data14DiasDepois.getFullYear();
  
    const dataAtualStr = `${diaAtual}/${mesAtual}/${anoAtual}`;
    const data14DiasDepoisStr = `${dia14DiasDepois}/${mes14DiasDepois}/${ano14DiasDepois}`;
  
    document.getElementById("inputEmprestimoData").value = data14DiasDepoisStr;
  }
atualizarDatas();

const btnEnviar =document.getElementById("btnConfirmeEmprestimo")

btnEnviar.onclick = ()=>{
    if(
        document.getElementById("inputEmprestimoLivro").value != "" && document.getElementById("inputEmprestimoName").value != ""){
            alert(document.getElementById("inputEmprestimoLivro").value)
            alert(document.getElementById("inputEmprestimoName").value)
    }
    else{
        alert("Preencha todos os campos")
    }
}