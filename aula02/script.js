function calcularIMC (peso, altura){
    return peso/ (altura **2)

}

function camposvalidos(){
return document.querySelector("form").reportValidity()

}

function classificacao(imc) {

    let categoria

        if (valorIMC < 18.5){
            categoria = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            categoria = 'com peso ideal. <span calss='azul'>Parabéns!</span>';
        }else if (valorIMC < 30){
            categoria = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            categoria = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            categoria = 'com obesidade grau II';
        }else {
            categoria = 'com obesidade grau III.<span calss='vermelho'> Cuidado!</span>';
        }

        return categoria


 }






function exibirResultado(){
    const resultado = document.getElementById("resultado")
    const nome = document.getElementById("nome").value.replace(",",",")
    const peso = document.getElementById("peso").value.replace(",",",")
    const altura = document.getElementById("altura").value.replace(",",",")

    if (camposValidos()){
    const imc = calcularIMC (peso,altura)
    const classificacao = classificar(imc)
    
    resultado.innerHTML= '${nome} seu IMC é ${imc.tofixed(1)} e você está ${classificacao}';
    } else[
        resultados.textContent = "preencha os campos !"
    ]
}


function capturarEnter(evento) {
    if (evento.key == "Enter") {
        exibirResultado()
    }
}








document.getElementById("calcular").addEventListener("click",exibirResultado)
document.querySelector("form").addEventListener("keypress, capturarEnter")
