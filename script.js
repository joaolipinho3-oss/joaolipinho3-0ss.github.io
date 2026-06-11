const botaoSoma = document.getElementById('soma'); // Botão de +
const botaoSubtracao = document.getElementById('subtracao'); // Botão de menos
const increment = document.getElementById('changeBy'); // Mudar incremento
const tela = document.getElementById('display-counter');
const reset = document.getElementById('reset-button');

console.log(botaoSoma);
console.log(botaoSubtracao);
console.log(increment);
console.log(tela);
console.log(reset)

let contador = 0;

function atualizarTela() {
  tela.textContent = contador;
};

botaoSoma.addEventListener('click',() => {
    console.log("Clique no +");
    contador += parseInt(increment.value);
    atualizarTela();
    console.log(`Contador: ${contador}`)
});

botaoSubtracao.addEventListener('click', () => {
    console.log("Clique no -");
    contador -= parseInt(increment.value);
    atualizarTela();
    console.log(`Contador: ${contador}`)
});
reset.addEventListener('click', () => {
    console.log("Reset pressionado")
    contador = 0
    atualizarTela()
    console.log(`Contador: ${contador}`)
})

document.addEventListener('keydown', (event) => {
    if (event.key === '=') {
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

    if (event.key === 'up') {
        increment.value += 1;
    }

    if (event.key === 'down') {
        incremente.value -= 1;
    }
});