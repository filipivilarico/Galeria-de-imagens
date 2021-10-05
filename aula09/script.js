"use strict"

const imagens = [
   "https://static9.depositphotos.com/1020341/1109/i/600/depositphotos_11094645-stock-photo-map-of-brazil-with-waving.jpg",
    "./img/jm1.jpeg",
    "./img/jm2.png",
    "./img/jm3.jpg",
    "./img/jm4.jpg",
    "./img/jm5.jpg",
    "./img/jm6.jpg",
    "./img/jm7.jpg",
    "./img/jm8.jpg"


]

const filtrarId = (urlImagem) => {
    const ultimaBarra = urlImagem.lastIndexOf("/") +1
    const ultimoPonto = urlImagem.lastIndexOf(".")
    return urlImagem.substring(ultimaBarra,ultimoPonto)
}
const criarItem = (urlImagem) => {
    const container = document.querySelector(".container")
    const novoLink = document.createElement("a")
    novoLink.href= `#${filtrarId(urlImagem)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)
}

const criarSlide = (urlImagem, indice, array) => {
    const container = document.querySelector(".slide-container")
    const novaDiv = document.createElement("div")
    novaDiv.classList.add("slide")
    novaDiv.id = filtrarId(urlImagem)


    const indiceAnterior = indice == 0 ? array.length - 1 : indice - 1
    const slideAnterior = filtrarId(array[indiceAnterior])

    const indiceSeguinte = indice == array.length - 1 ? 0 : indice + 1
    const slideSeguinte = filtrarId(array[indiceSeguinte])



    novaDiv.innerHTML =`
    
        <div class="imagem-container">
     <a href="#" class="fechar">&#10006;</a>
    <a href="#${slideAnterior}" class="navegacao anterior">&#171;</a>
     <img src="${urlImagem}" alt="">
     <a href="#${slideSeguinte}" class="navegacao proximo">&#187;</a>
    </div>
        `

        container.appendChild(novaDiv)
        
}



const carregarGaleria = (imgs) => imgs.forEach(criarItem)
const carregarslide = (imgs) => imgs.forEach(criarSlide)

carregarGaleria(imagens)

carregarslide(imagens)

