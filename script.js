const botaoSoma = document.getElementById('soma'); // Botão de +
const botaoSubtracao = document.getElementById('subtracao'); // Botão de menos
const increment = document.getElementById('changeBy'); // Mudar incremento
const tela = document.getElementById('display-counter');

console.log(botaoSoma);
console.log(botaoSubtracao);
console.log(increment);
console.log(tela);

let contador = 0;

function atualizarTela() {
  tela.textContent = contador;
};

botaoSoma.addEventListener('click',() => {
    console.log("Clique no +");
    contador += parseInt(increment.value);
    atualizarTela();
    console.log(`Contador: ${contador}` )
});

botaoSubtracao.addEventListener('click', () => {
    console.log("Clique no -");
    contador -= parseInt(increment.value);
    atualizarTela();
    console.log(`Contador: ${contador}` )
});

botaoSoma.addEventListener('keydown', )