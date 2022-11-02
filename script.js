let jogada = document.querySelectorAll(".quadrado")

let ultimaJogada = "O"

let idJogada = []

function verificaGanhador(jogadaId){

   
    idJogada[jogadaId] = document.getElementById(jogadaId)
    
    
    // idJogada[1] = document.getElementById("1")
    // idJogada[2] = document.getElementById("2")
    // idJogada[3] = document.getElementById("3")

    //console.log(idJogada[1].innerText)
    // lógica para definir o ganhador
    // verifica se linha um teve ganhador (1,2,3)
     if(typeof idJogada[1] != "undefined" && typeof idJogada[2] != "undefined" && typeof idJogada[3] != "undefined"){
        if(idJogada[1].innerText == idJogada[2].innerText && idJogada[2].innerText == idJogada[3].innerText){
            alert("alguém ganhou")
        }
        
     }
     // verifica se a coluna 1 teve um ganhador (1,4,7)
     if(typeof idJogada[1] != "undefined" && typeof idJogada[4] != "undefined" && typeof idJogada[7] != "undefined"){
        if(idJogada[1].innerText == idJogada[4].innerText && idJogada[4].innerText == idJogada[7].innerText){
            alert("alguém ganhou")
        }
        
     }
     
     //verfica se a linha 2 teve um ganhador (4,5,6)
     if(typeof idJogada[4] != "undefined" && typeof idJogada[5] != "undefined" && typeof idJogada[6] != "undefined"){
        if(idJogada[4].innerText == idJogada[5].innerText && idJogada[5].innerText == idJogada[6].innerText){
            alert("alguém ganhou")
        } 
     }

     // verifica se a coluna 2 tem um ganhador (2,5,8)
     if(typeof idJogada[2] != "undefined" && typeof idJogada[5] != "undefined" && typeof idJogada[8] != "undefined"){
        if(idJogada[2].innerText == idJogada[5].innerText && idJogada[5].innerText == idJogada[8].innerText){
            alert("alguém ganhou")
        } 
     }

     // verifica se a linha 3 teve um ganhador (7,8,9)
     if(typeof idJogada[7] != "undefined" && typeof idJogada[8] != "undefined" && typeof idJogada[9] != "undefined"){
        if(idJogada[7].innerText == idJogada[8].innerText && idJogada[8].innerText == idJogada[9].innerText){
            alert("alguém ganhou")
        } 
     }

     // verifica se a coluna 3 tem um ganhador (3,6,9)
     if(typeof idJogada[3] != "undefined" && typeof idJogada[6] != "undefined" && typeof idJogada[9] != "undefined"){
        if(idJogada[3].innerText == idJogada[6].innerText && idJogada[6].innerText == idJogada[9].innerText){
            alert("alguém ganhou")
        } 
     }

     // verifica se a transversal 1 tem um ganhador (1,5,9)
     if(typeof idJogada[1] != "undefined" && typeof idJogada[5] != "undefined" && typeof idJogada[9] != "undefined"){
        if(idJogada[1].innerText == idJogada[5].innerText && idJogada[5].innerText == idJogada[9].innerText){
            alert("alguém ganhou")
        } 
     }

     // verifica se a transversal 2 tem um ganhador (3,5,7)

     if(typeof idJogada[3] != "undefined" && typeof idJogada[5] != "undefined" && typeof idJogada[7] != "undefined"){
        if(idJogada[3].innerText == idJogada[5].innerText && idJogada[5].innerText == idJogada[7].innerText){
            alert("alguém ganhou")
        } 
     }
}



for (let i=0; i < jogada.length; i++) {
    jogada[i].addEventListener("click",function() {
        if(ultimaJogada == "O"){
            if(jogada[i].innerText == ""){
                jogada[i].innerText = "X"
                ultimaJogada = "X"
                verificaGanhador(jogada[i].id)
            }
           
        }else{
            if(jogada[i].innerText == ""){
                jogada[i].innerText = "O"
                ultimaJogada = "O"
                verificaGanhador(jogada[i].id)
            }
            
        }
        
    })
}

