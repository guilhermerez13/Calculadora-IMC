

/*const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);

*/






//COLA




/*
const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = "";
        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC}. Você está ${classificacao}`;

    }else {
        resultado.textContent = 'Preencha os campos necessários';
    }
}

calcular.addEventListener('click', imc);

*/
const calcular = document.getElementById('calcular');
function imc(){
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if(nome != '' && peso != '' && altura != ''){
        const valorIMC = (peso/(altura*altura)).toFixed(2);
        let verifica = '';

        if(valorIMC < 18.5){
            verifica = 'Você está abaixo do peso';
        }else if(valorIMC < 25){
            verifica = 'Você está no peso ideal';
        }else if (valorIMC < 30){
            verifica = 'Você está levemente acima do peso.';
        }else if (valorIMC < 35){
            verifica = 'Você está com obesidade grau I.';
        }else if (valorIMC < 40){
            verifica = 'Você com obesidade grau II';
        }else {
            verifica = 'Você com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = nome + ' seu IMC é: ' + valorIMC + '. ' + verifica;
    }else {
        alert('termina de preencher preguiçoso');
    }
}
calcular.addEventListener('click', imc);