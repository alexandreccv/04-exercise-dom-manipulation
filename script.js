// Seu código aqui

//  1- Crie e execute uma função que mude o texto na tag <p>-----</p>, para uma descrição de como você se vê daqui a 2 anos.

document.getElementById('paragraph-req-um').innerText = 'Daqui 2 anos estarei trabalhando';

//  2-Crie e execute uma função que mude a cor de fundo do elemento amarelo para rgb(76, 164, 109).

document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76, 164, 109)';

//  usando queryselector
/* document.querySelector('.main-content').style.backgroundColor = 'rgb(76, 164, 109)'; */

// 3-Crie e execute uma função que mude a cor de fundo do elemento vermelho para branco.

document.querySelector('.main-content .center-content').style.backgroundColor = 'white';

//  4-Crie e execute uma função que corrija o texto da tag <h1>.

document.querySelector('.title').innerText = 'Desafio - JavaScript';

// 5- Crie e execute uma função que modifique o texto da primeira tag <p> para letras maiúsculas.

const pUm = document.getElementById('p-um');
pUm.innerText = pUm.innerText.toUpperCase();

/*
6- Crie e execute uma função que exiba o conteúdo de todas as tags <p>:

Da seção principal: ou seja, com className center-content;
Os conteúdos devem ser separados por espaços.
*/

function exibindoTags() {
  const paragrafos = document.querySelectorAll('p');
  let conteudo = '';

  paragrafos.forEach((paragrafo) => {
    conteudo += `${paragrafo.innerHTML} `;
  });
  const rodape = document.querySelector('footer p');
  rodape.innerHTML = conteudo;
}
exibindoTags();
