

function sortear() {
  let quantidade = Number(document.getElementById('quantidade').value);
  let de = Number(document.getElementById('de').value);
  let ate = Number(document.getElementById('ate').value);

  if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
    alert('Valores incompativeis, digite apenas numeros');
    return;
  } if (quantidade <= 0) {
    alert('A Quantidade deve ser maior que 0!');
    return;
  } if (de > ate) {
    alert('o Campo "DO NUMERO" não pode ser maior que o campo "ATÉ O NUMERO" e vice e versa.');
    return;
  } if (quantidade > (ate - de + 1)) {
    alert(`Quantidade inválida! O intervalo só comporta ${ate - de + 1} número(s) distintos.`);
    return;
  }

  let sorteados = [];
  let numero;

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
    }

    sorteados.push(numero);
  }
  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`

  alterarBotao();
}


function obterNumeroAleatorio(min, max) {
  if (min > max) {
    alert('Erro, digite um valor correto!');
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarBotao() {
  let botao = document.getElementById('btn-reiniciar');
  if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');
    botao.classList.add('container__botao');
  } else {
    botao.classList.remove('container__botao');
    botao.classList.add('container__botao-desabilitado');


  }
}

function reiniciar() {
  document.getElementById('quantidade').value = '';
  document.getElementById('de').value = '';
  document.getElementById('ate').value = '';
  document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
  alterarBotao();
}
