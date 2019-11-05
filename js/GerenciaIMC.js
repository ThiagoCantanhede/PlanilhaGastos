function RetornarIMC(peso, altura) {
return (peso / (altura * altura)).toFixed(2);
}

function ValidarAltura(altura) {

    if (altura < 0 || altura > 3.00) {
        return false;
    }
    else {
        return true;
    }
}

function ValidarPeso(peso) {

    if (peso < 0 || peso > 1000) {
        return false;
    }
    else {
        return true;
    }
}


function IndicarNaTabelaClassificacaoEncontrada(pIMC) {
    LimparSelecao();

    if (pIMC <= 18.5) {
        document.querySelector("#classificacao1").classList.add("LinhaSelecionada");    
    }
    if ((pIMC >= 18.6) && (pIMC <= 24.9)) {
        document.querySelector("#classificacao2").classList.add("LinhaSelecionada");
    }
    if ((pIMC >= 25) && (pIMC <= 29.9)) {
        document.querySelector("#classificacao3").classList.add("LinhaSelecionada");
    }
    if ((pIMC >= 30) && (pIMC <= 34.9)) {
        document.querySelector("#classificacao4").classList.add("LinhaSelecionadaCuidado");
    }
    if ((pIMC >= 35) && (pIMC <= 39.9)) {
        document.querySelector("#classificacao5").classList.add("LinhaSelecionadaCuidado");
    }
    if (pIMC > 40) {
        document.querySelector("#classificacao6").classList.add("LinhaSelecionadaCuidado");
    }
} 

function LimparSelecao(){
    document.querySelector("#classificacao1").classList.remove("LinhaSelecionada");
    document.querySelector("#classificacao2").classList.remove("LinhaSelecionada");
    document.querySelector("#classificacao3").classList.remove("LinhaSelecionada");
    document.querySelector("#classificacao4").classList.remove("LinhaSelecionada");
    document.querySelector("#classificacao5").classList.remove("LinhaSelecionada");
    document.querySelector("#classificacao6").classList.remove("LinhaSelecionada");
    document.querySelector("#classificacao1").classList.remove("LinhaSelecionadaCuidado");
    document.querySelector("#classificacao2").classList.remove("LinhaSelecionadaCuidado");
    document.querySelector("#classificacao3").classList.remove("LinhaSelecionadaCuidado");
    document.querySelector("#classificacao4").classList.remove("LinhaSelecionadaCuidado");
    document.querySelector("#classificacao5").classList.remove("LinhaSelecionadaCuidado");
    document.querySelector("#classificacao6").classList.remove("LinhaSelecionadaCuidado");
}



var FormularioIMC = document.querySelector("#FormCalcula");
var BotaoIMC = document.querySelector("#calcular");

BotaoIMC.addEventListener("click", function (event) {
    event.preventDefault(); 
    var Peso = FormularioIMC.peso.value;
    var Altura = FormularioIMC.altura.value;

    if (ValidarPeso(Peso) && ValidarAltura(Altura)) {
        FormularioIMC.imc.value = RetornarIMC(Peso, Altura);
    }
    else {
        FormularioIMC.imc.value = "Peso ou altura inválidos!"
    }

    IndicarNaTabelaClassificacaoEncontrada(FormularioIMC.imc.value);
    
})
