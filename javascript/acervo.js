const list = document.querySelector(".livroAcervo")
        let listCont = '' 
        let idSection = 0
        fetch("../json/acervo.json").then((resposta) =>{
        resposta.json().then((dados) =>{
        dados.livrosGerais.forEach((livro) =>{
            
            
            listCont += 
            `<section class="sectionLivro"
            style=" display: flex; flex-direction: row; font-weight: 600; background-color: #fff; width: 100%; height: auto; border-radius: 20px;">
                    <div class="d1" style="display: flex; justify-content: center; align-items: center; width: 5%; height: 100%; background-color: #05704F; border-radius: 20px 0 0 20px" >
                        <img src="img/editAcervo.png">
                    </div>
                    <div class="d2" style="display: flex; flex-direction: column; width: 90%; height: 100%; padding: 0 2%">    
                        <div style="display: flex; flex-direction: row; align-items: center;  gap: 10px; height: 40px">
                            <p>Nome do Livro: ${livro.nomeDoLivro}</p>
                            <p>Autor do Livro: ${livro.nomeDoAutor}</p>
                        </div>
                        <div style="display: none; flex-direction: row; gap: 2%;">
                            <p>Tombo do Livro: ${livro.tomboDoLivro}</p>
                            <p>Data de Chegada: ${livro.dataChegada}</p>
                            <p>Data de Lançamento: ${livro.Lancamento}</p>
                            <p>Volume: ${livro.volume}</p>
                            <p>Editora: ${livro.editora}</p>      
                        </div>    
                    </div>
                    <div class="d3" style="width: 5%; height: 100%;">
                        <button class="btnMaisInfor" style="width: 100%; height: 100%; background: transparent; border: none;">
                            <img src="img/pInfor.png">
                        </button>
                    </div>
            </section>`
        
            list.innerHTML = listCont
        
            function toggleDisplay(btn) {
                const section = btn.closest(".sectionLivro");
                const div2 = section.querySelector('.d2 div:last-child');
                const d3 = section.querySelector('.d3 button img');
                if (div2.style.display === 'none') {
                    div2.style.display = 'flex';
                    div2.style.height = "45px"
                    d3.style.transform = "rotate(180deg)"
                    } else {
                    div2.style.display = 'none';
                    d3.style.transform = "rotate(0deg)"
                    }
                    // console.log("ola")
                    }
                const btns = document.querySelectorAll(".btnMaisInfor");
                    btns.forEach(btn => {
                        btn.addEventListener('click', () => toggleDisplay(btn));
            });
        })
    })
})
        
