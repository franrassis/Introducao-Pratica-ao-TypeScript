

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let limparCampoSoma = document.getElementById ('limpar-soma');


let saldoTotal = 0 

limparSaldo ()


function somarAoSaldo(soma:number) {
    if (campoSaldo){
        saldoTotal += soma
        campoSaldo.innerHTML=saldoTotal.toString();
        limparCampoSoma();
    }
}

function limparSaldo() {
   soma.value = '';
}

funtion limparSaldo() {
    if (campoSaldo){
        saldoTotal =0;
        campoSaldo.innerHTML=saldoTotal.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click',() => {
        somarAoSaldo (Number(soma.value));
    });
}


botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

