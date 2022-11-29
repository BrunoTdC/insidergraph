let estado = true
let estadoConteudo = false
let idConteudo1 = document.getElementById('conteudo')
let idConteudo2 = document.getElementById('conteudo2')
let menu = document.getElementById("menu_navbar")

const controles = document.querySelectorAll(".contrl")
//console.log(controles)

let numItens = 1
const controleItems = document.querySelectorAll(".card")
//console.log(controleItems)
const maxItem = controleItems.length
//console.log(maxItem)

controles.forEach(controle => {
    controle.addEventListener('click',() => {
        const left = controle.classList.contains('indicador_1')
        if(left){
            numItens -= 1
        }else{
            numItens += 1
        }

        if(numItens >= maxItem){
            numItens = 0
        }
        if(numItens < 0 ){
            numItens = maxItem - 1 
        }
        //console.log('controle clicado', left, numItens)

        controleItems.forEach(item => 
            item.classList.remove('card_active'))

        controleItems[numItens].scrollIntoView({
            inline: "center",
            behavior: "smooth",
            block: "nearest"
        })
        controleItems[numItens].classList.add('card_active')
    })
})

function ajustasite(){
   let largura = window.innerWidth
   if(largura > 775){
        menu.classList.add("menu-int")
        menu.classList.remove("menu-navbar")
        idConteudo1.style.height="100%"
        idConteudo2.style.height="100%"
        estado = true  
   }else{
        idConteudo1.style.height="570px"
        idConteudo2.style.height="570px"
   }
}


function navbar(){
    switch(estado){
        case true:
            menu.classList.remove("menu-int")
            menu.classList.add("menu-navbar")
            estado = false  
        break  

        case false:
            menu.classList.add("menu-int")
            menu.classList.remove("menu-navbar")
            estado = true  
        break  
    }    
}

function conteudo(n){
    let idTxt;
    let btn;
    if(n === "0"){
        idConteudo = document.getElementById('conteudo')
        idTxt = document.getElementById('txt_1')
        btn = document.getElementById('btn_conteudo')
    }else{
        idConteudo = document.getElementById('conteudo2')
        idTxt = document.getElementById('txt_2')
        btn = document.getElementById('btn_conteudo2')
    }
    
    switch(estadoConteudo){
        case true:
            idConteudo.style.height="100%"
            idTxt.style.overflow = "visible"
            btn.value ="Mostrar menos"
            estadoConteudo = false  
        break  

        case false:
            idConteudo.style.height="570px"
            idTxt.style.overflow = "hidden"
            btn.value ="Mostrar mais"
            estadoConteudo = true  
        break  
    }
console.log(btn)
}

