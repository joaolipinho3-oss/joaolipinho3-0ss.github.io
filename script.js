const botaoSoma = document.getElementById('soma'); // Botão de +
const botaoSubtracao = document.getElementById('subtracao'); // Botão de menos
const increment = document.getElementById('changeBy'); // Mudar incremento
const tela = document.getElementById('display-counter'); // Tela contador
const reset = document.getElementById('reset-button'); // Reiniciar

console.log(botaoSoma);
console.log(botaoSubtracao);
console.log(increment);
console.log(tela);
console.log(reset);

let contador = 0;
let minIncrement = 1;
let maxIncrement = 10
let backupContador = []

function atualizarTela() { //Atualiza o display-counter e substitui o valor pelo número do contador.
    tela.textContent = contador;
    backupContador.append(contador.value)
};
function obterIncremento() {
    const valor = Number(increment.value);

    if (isNaN(valor) || !Number.isInteger(valor)) {
        alert("Digite apenas números inteiros.");
        increment.value = 1;
        return null;
    }
    return valor;
}
function contadorMinMax() { // Mínimo e máximo do incremento, evita o increwmento ser igual a 0 ao usar os atalhos.
    if (increment.value < minIncrement) {
        increment.value = minIncrement;
        alert("Desculpe o valor mínimo do incremento é 1 :(")
        }
    else if (increment.value > maxIncrement) {
        increment.value = maxIncrement;
        alert("Desculpe o valor máximo do incremento é 10 :(")
        }
    }

botaoSoma.addEventListener('click',() => { //Evento de clique para aumentar o contador.
    obterIncremento()
    console.log("Clique no +");
    contador += parseInt(increment.value);
    atualizarTela();
    console.log(`Contador: ${contador}`)
});

botaoSubtracao.addEventListener('click', () => { //Evento de clique para diminuir o contador.
    obterIncremento()
    console.log("Clique no -");
    contador -= parseInt(increment.value);
    atualizarTela();
    console.log(`Contador: ${contador}`)
});

reset.addEventListener('click', () => { // Lógica do botão de reiniciar
    obterIncremento()
    console.log("Reset pressionado")
    contador = 0
    atualizarTela()
    console.log("Contador reiniciado!")
})

document.addEventListener('keyup', (event) => { // Logica dos atalhos de teclado
    if (event.key === '=' || event.key === ' ') {
        obterIncremento()
        contador += parseInt(increment.value);
        console.log("Tecla pressionada +");
        console.log(`Contador: ${contador}`);
        atualizarTela();
    }

    if (event.key === '-') { 
        obterIncremento()
        contador -= parseInt(increment.value);
        console.log("Tecla pressionada +");
        console.log(`Contador: ${contador}`);
        atualizarTela();
    }

    if (event.key === 'r') {
        console.log("Tecla 'reset' pressionada")
        console.log("contador reiniciado")
        contador = 0;
        atualizarTela();
    }

    if (event.key === 'ArrowUp') {
        obterIncremento()
        increment.value = parseInt(increment.value) + 1;
        contadorMinMax()
        console.log("Incremento + 1")
    }
    if (event.key === 'ArrowDown') {
        obterIncremento()
        increment.value = parseInt(increment.value) - 1
        contadorMinMax()
        console.log("Incremento - 1")
    }
});

increment.addEventListener('keydown', (event) => { //Evita que o usuário digite '.' ou vírgula no incremento
    if (event.key === '.' || event.key === ',' || event.key === 'e') {
        event.preventDefault();
    }
});

increment.addEventListener('blur', () => { //Evita que o incremento seja igual a 'vazio'
    if (increment.value.trim() === '') {
        increment.value = 1;
    }
})