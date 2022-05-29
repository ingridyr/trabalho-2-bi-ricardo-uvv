//parte 1: Lógica

function result() {
  //array com as respostas possíveis
  let answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "Rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, of course",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  //lógica que fará o "sorteio" de um numero de 0 a 19
  let random = Math.floor(Math.random() * 20 + 0);

  //variavel recebendo a frase que estiver na posição do número sorteado
  result = answers[random];

  //retorna o resultado
  return result;
}
/* -------------------------------------------------------------------------- */

//parte 2 : DOM

//seleciona os elementos no qual será adicionado o escutador de evento
let ballFront = document.getElementById("image-front");
let buttonReset = document.querySelector("#button-reset");

//seleciona o input para verificações posteriores
let input = document.querySelector("#text-area");

//adiciona o escutador de evento no clique da imagem da bola
ballFront.addEventListener("click", function (event) {

  //comando para evitar possíveis erros de "bubbling"
  event.preventDefault();

  //seleciona a div pai
  let section = document.getElementById("mainSection");

  //caso o input esteja vazio exibe um modal
  if (!input.value) {

    //seleciona o modal do html
    let alert = document.getElementById("alert-modal");

    //adiciona a classe que torna-o visível
    alert.className = "alert-modal-on";
  }

  //verifica se o input não está vazio para executar todo o código de funcionamento
  if (input.value) {
    //cria uma nova tag figure e atribui um id
    let figure = document.createElement("figure");
    figure.id = "toggle-on";
    figure.className = "toggle-on";

    //cria uma tag img e atribui a imagem que vai mostrar o resultado
    let img = document.createElement("img");
    img.src = "./assets/img/magic-8-ball-back.png";
    img.className = "image-back";
    img.id = "image-back";

    //torna img filha de figure e figure filha da div mainSection
    section.appendChild(figure);
    figure.appendChild(img);

    //seleciona a div ("toggle-off") que está mostrando a bola sem mensagem
    let ballFront = document.getElementById("toggle-off");

    //adiciona uma classe ("toggle-off") à div que fará ela invisível no css
    ballFront.className = "toggle-off";

    //cria a div que exibirá o texto do resultado e atribui um id
    let div = document.createElement("div");
    div.id = "result-box";

    //cria a tag paragraph recebendo o resultado criado na parte 1 (lógica)
    let paragraph = document.createElement("p");
    paragraph.innerHTML = result();

    //torna a tag "p" filha da div e a div filha da "mainSection"
    section.appendChild(div);
    div.appendChild(paragraph);
  }
});

//cria um escutador de evento de clique para o input
input.addEventListener("click", function (event) {
  //seleciona a div do modal alert
  let alert = document.getElementById("alert-modal");

  //adiciona a classe que torna-a invisivel
  alert.className = "alert-modal-off";
});

//adiciona um escutador de evento no click do botão reset
buttonReset.addEventListener("click", function (event) {
  //comando para evitar possíveis erros de "bubbling"
  event.preventDefault();

  //da refresh na página
  location.reload();
});
