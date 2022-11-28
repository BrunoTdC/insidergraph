let estado = true
let menu = document.getElementById("menu_navbar")

const controles = document.querySelectorAll(".contrl")
console.log(controles)

let numItens = 1
const controleItems = document.querySelectorAll(".card")
console.log(controleItems)
const maxItem = controleItems.length
console.log(maxItem)

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
        console.log('controle clicado', left, numItens)

        controleItems.forEach(item => 
            item.classList.remove('card_active'))

        controleItems[numItens].scrollIntoView({
            inline: "center",
            behavior: "smooth"
        })
        controleItems[numItens].classList.add('card_active')
    })
})

function ajustasite(){
   let largura = window.innerWidth
   if(largura > 760){
        menu.classList.add("menu-int")
        menu.classList.remove("menu-navbar")
        estado = true  
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

