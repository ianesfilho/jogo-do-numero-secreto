//ex: dobro do numero
let numero = 2;
let dobro = 0;

function dobraNumero() {
    dobro = numero * 2;
    alert('O dobro de '+numero+' é: '+dobro);
}

//ex: media
let numero1 = 2;
let numero2 = 8;
let numero3 = 11;
let media = 0;

function media(){
    media = (numero1+numero2+numero3)/3;
    alert(media);
}

//ex: maior dos numeros
let numero4 = 5;
let numero5 = 8;

function maiorDeles(){
    if(numero4 > numero5) {
        alert(numero4);
    } if(numero5>numero4){
        alert(numero5);
    } else {
        alert('Os numeros são iguais!');
    }
}

//ex: multiplicado por ele mesmo
let numero6 = 6;
let multiplicacao = 0;

function multiplica() {
    multiplicacao = numero6*numero6;
    alert(multiplicacao);
}