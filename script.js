const botaoSoma = document.getElementById('soma'); // Botão de +
const botaoSubtracao = document.getElementById('subtracao'); // Botão de menos
const increment = document.getElementById('changeBy'); // Mudar incremento
const tela = document.getElementById('display-counter'); // Tela contador
const reset = document.getElementById('reset-button'); // Reiniciar

console.log(botaoSoma);
console.log(botaoSubtracao);
console.log(increment);
console.log(tela);
console.log(reset)

let contador = 0;
let minIncrement = 0;
let maxIncrement = 10

function atualizarTela() { //Atualiza o display-counter e substitui o valor pelo número do contador.
  tela.textContent = contador;
};

function contadorMinMax() { // Mínimo do contador
    if (increment.value > minIncrement) {
        increment.value = minIncrement;
        alert("Desculpe o valor mínimo do incremento é 1 :(")
        }
    else {
        increment.value = parseInt(increment.value) - 1;
        }
}

botaoSoma.addEventListener('click',() => { //Evento de clique para aumentar o contador.
    console.log("Clique no +");
    contador += parseInt(increment.value);
    atualizarTela();
    console.log(`Contador: ${contador}`)
});

botaoSubtracao.addEventListener('click', () => { //Evento de clique para diminuir o contador.
    console.log("Clique no -");
    contador -= parseInt(increment.value);
    atualizarTela();
    console.log(`Contador: ${contador}`)
});

reset.addEventListener('click', () => { // Lógica do botão de reiniciar
    console.log("Reset pressionado")
    contador = 0
    atualizarTela()
    console.log(`Contador: ${contador}`)
})

document.addEventListener('keydown', (event) => { // Logica dos atalhos de teclado
    if (event.key === '=' || event.key === ' ') {
        if (increment.value > maxIncrement) {
        
        }
        contador += parseInt(increment.value);
        atualizarTela();
    }

    if (event.key === '-') { 
        contador -= parseInt(increment.value);
        atualizarTela();
    }

    if (event.key === 'r') {
        contador = 0;
        atualizarTela();
    }

    if (event.key === 'ArrowUp') {
        if (increment.value > maxIncrement) {
            increment.value = maxIncrement;
            alert("Desculpe o valor máximo do incremento é 10 :(")
        }
        else {
            increment.value = parseInt(increment.value) + 1;
        }
    }
    if (event.key === 'ArrowDown') {
        contadorMinMax()
    }
});