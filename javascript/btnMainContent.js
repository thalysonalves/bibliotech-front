const btnMainContent = document.querySelectorAll(".btnMain")
const btnMain1 = document.getElementById("btnMain1")
const btnMain2 = document.getElementById("btnMain2")
const btnMain3 = document.getElementById("btnMain3")
const btnMain4 = document.getElementById("btnMain4")

const mainInicio = document.querySelector(".mainInicio")
const mainHistorico = document.querySelector(".mainHistorico")
const mainEmprestimo = document.querySelector(".mainEmprestimo")
const mainAcervo = document.querySelector(".mainAcervo")


btnMainContent.forEach(btnMainContent =>{
    btnMainContent.addEventListener("click", function(event){
        switch(event.target.id){
            case 'btnMain1':
            case 'btnMainImg1':
            case 'btnMainH1':
                mainInicio.style.display = "flex"
                mainHistorico.style.display = "none"
                mainEmprestimo.style.display = "none"
                mainAcervo.style.display = "none"
            break;
            case 'btnMain2':
            case 'btnMainImg2':
            case 'btnMainH2':
                mainInicio.style.display = "none"
                mainHistorico.style.display = "flex"
                mainEmprestimo.style.display = "none"
                mainAcervo.style.display = "none"  
            break;
            case 'btnMain3':
            case 'btnMainImg3':
            case 'btnMainH3':
                mainInicio.style.display = "none"
                mainHistorico.style.display = "none"
                mainEmprestimo.style.display = "flex"
                mainAcervo.style.display = "none"
            break;
            case 'btnMain4':
            case 'btnMainImg4':
            case 'btnMainH4':
                mainInicio.style.display = "none"
                mainHistorico.style.display = "none"
                mainEmprestimo.style.display = "none"
                mainAcervo.style.display = "flex"
            break;
            default:
               
            break;
            }
    })
})

