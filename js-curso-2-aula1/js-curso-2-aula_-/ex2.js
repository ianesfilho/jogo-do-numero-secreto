//ex: IMC
let peso = 80;
let altura = 180;
let IMC = 0;

function calculaIMC(peso, altura){
    IMC = (peso)/altura*altura;
    exibirTextoNaTela('p', IMC);
}

