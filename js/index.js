
function cardProduto (data){

const card = document.createElement("li")
let imagemProduto = document.createElement("img")
const dadosProduto = document.createElement("main")
const categoria = document.createElement("p")
const tituloProduto = document.createElement("h2")
const descricaoProduto = document.createElement("p")
const precoProduto = document.createElement("h3")
const adicionarCarrinho = document.createElement("p")

const id = data.id
imagemProduto.src = data.img
const nameItem = data.nameItem
const description = data.description
const value = data.value
const addCart = data.addCart
const tag = data.tag


card.classList.add("card")
imagemProduto.classList.add("imagem-produto")
dadosProduto.classList.add("product-main")
categoria.classList.add("categoria")
tituloProduto.classList.add("titulo-produto")
descricaoProduto.classList.add("descricao-produto")
precoProduto.classList.add("preco-produto")
adicionarCarrinho.classList.add("adicionar-carrinho")
adicionarCarrinho.id = data.id

categoria.innerText = tag
tituloProduto.innerText = nameItem
descricaoProduto.innerText = description
precoProduto.innerText = `R$ ${value}`
adicionarCarrinho.innerText = addCart



dadosProduto.append(categoria, tituloProduto, descricaoProduto, precoProduto, adicionarCarrinho)
card.append(imagemProduto, dadosProduto)
return card
}


function loopCard (listaProdutos){
const fileira = document.querySelector(".fileira")
for (let i = 0; i<listaProdutos.length; i++) {
    const produto = listaProdutos[i]
    const card = cardProduto(produto)
    fileira.appendChild(card)
}
}
loopCard(data)

let arrayCarrinho = []


const body = document.querySelector("body")
body.addEventListener("click", function(evento) {
    if (evento.target.className === "adicionar-carrinho") {
        idProduto = evento.target.id   
        arrayCarrinho.push(data[idProduto-1]) 
    }

    if (evento.target.className === "remover-produto"){
        idProduto = evento.target.id  
        console.log(idProduto)
            for (let i = 0; i<arrayCarrinho.length; i++) {
                if (idProduto == arrayCarrinho[i].id) {
                    arrayCarrinho.pop(i)
                }
            }
        console.log(arrayCarrinho)
    }

    divItensCarrinho = document.getElementById("div-carrinho-itens")
    divItensCarrinho.innerHTML = ""


    let precoTotal = 0

    arrayCarrinho.forEach(function (item, index) {
        divItensCarrinho.classList.add("div-itens-carrinho")
        divProduto = document.createElement("div")
        divLista = document.createElement("li")
        divProduto.class = 'div-produto'
        divFoto = document.createElement("div")
        divProduto.id = item.id

        liImg = document.createElement("img")
        liImg.classList.add("imagem-carrinho")
        liNome = document.createElement("p")
        liValor = document.createElement("p")
        liLink  = document.createElement("p")
        liLink.className = 'remover-produto'            
        liLink.id = item.id
        liLink.innerText = "Remover produto"

        liImg.src = item.img
        liNome.innerText = item.nameItem
        liValor.innerText = `R$${item.value}`
        
        divLista.append(liNome, liValor, liLink)
        divProduto.append(liImg, divLista)
    

        divItensCarrinho.appendChild(divProduto)


        precoTotal += item.value
        
    })

    quantidade = document.getElementById("quantidade")
    quantidade.innerText = arrayCarrinho.length
    total = document.getElementById("total")

    total.innerText = precoTotal
    
    
    carrinhoVazio = document.querySelector("#div-carrinho-vazio")
    rodape = document.querySelector(".rodape-carrinho")
    
    if(arrayCarrinho.length >= 1){        
        divItensCarrinho.style.visibility = 'visible'
        rodape.style.visibility = 'visible'
        carrinhoVazio.style.visibility = 'hidden'
    }else{
        rodape.style.visibility = 'hidden'
        carrinhoVazio.style.visibility = 'visible'
    }
})



document.addEventListener("DOMContentLoaded", function(e) {
    if(arrayCarrinho.length == 0){
        carrinhoVazio = document.querySelector(".div-carrinho-vazio")
        carrinhoVazio.style.visibility = 'visible'

        rodape = document.querySelector(".rodape-carrinho")
        rodape.style.visibility = 'hidden'    
    }
    
});

