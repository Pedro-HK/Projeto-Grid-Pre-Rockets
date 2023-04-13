let itemsSelecionado = 0

const items = document.querySelectorAll('.item')

function controle (){

    itemsSelecionado++
    
    if(itemsSelecionado >= items.length){
        itemsSelecionado = 0
    }

    items.forEach(item => item.classList.remove('item-selecionado'))

    items[itemsSelecionado].scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block:"nearest"
    })

    items[itemsSelecionado].classList.add('item-selecionado')
}