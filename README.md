# Magic-8 ball <!-- adc link para imagem -->

>Acesse o jogo em: <https://exemplo.com/>


## nesse trabalho decidi replicar para a forma digital um jogo bem conhecido -em formato físico- que é a bola-mágica 8, onde o objetivo é "prever" uma resposta que auxilie o usuário a tomar uma decisão.

### para a lógica utilizei um método chamado Math.random que gera um numero aletório de acordo com os parâmetros passados, unido ao Math.floor que arredonda esse número para baixo.

### utilizei tambem um array de palavras o qual recebeu os 20 possíveis resultados da bola-mágica.

### associei o array ao número sorteado declarando meu resultado como sendo a palavra na posição (índice) do número -> ex: result = answers[random], se random = 1, então: result = aswers[1] que equivale à frase: "It is decidedly so".

~~~javascript
function result() {
  let answers = [
    "It is certain",
    "It is decidedly so",...
  ];
  let random = Math.floor(Math.random() * 20 + 0);
  result = answers[random];
  return result;
}
~~~

### para a renderização utilizei o DOM, o qual a partir de uma base já declarada inicialmente no html selecionei as tags e criei as partes dinâmicas que correspondem a:
1. Mudança da imagem da bola de frente para verso;
2. Texto com a frase resposta;
3. Modal de erro condicional;
4. Evento no botão para reset da página.
5. Evento no input para desativar o modal

### a ferramenta utilizada foi o método add.EventListener que a partir de um seletor cria um escutador para o evento que for definido no parâmetro 1 e executa a partir desse evento a função declarada no parâmetro 2.

~~~javascript
ballFront.addEventListener("click", function () { //logica aqui })
~~~

### na criação dos seletores, atribuí à uma variável o elemento nodeList, através do método document.getElementById() utilizando do id respectivo, declarado no html/DOM.

~~~javascript
let section = document.getElementById("mainSection");
~~~

### no funcionamento, o input recebeu uma condicional na sua função do escutador para que pudesse captar um valor e só então executar a criação da div com a resposta. Caso contrário, ele ativa a exibição de um modal alerta orientando que nada foi adicionado ao input:

~~~javascript
if (!input.value) {
    let alert = document.getElementById("alert-modal");

    alert.className = "alert-modal-on";
  }
~~~

### Ao clicar novamente no input o modal some e o usuário pode digitar sua pergunta:

~~~javascript
input.addEventListener("click", function (event) {
  let alert = document.getElementById("alert-modal");

  alert.className = "alert-modal-off";
});
~~~

### para receber a resposta, um escutador de evento foi colocado na div da própria bola de forma a ficar mais divertido e dinâmico para o usuário. Para que não haja dúvidas existe uma instrução de como jogar no cabeçalho da página.

### caso o usuário queira jogar novamente, existe um escutador de evento no botão "Play again", que é responsável por fazer o "refresh"/"reset" da página.

~~~javascript
buttonReset.addEventListener("click", function (event) {
  //comando para evitar possíveis erros de "bubbling"
  event.preventDefault();

  //da refresh na página
  location.reload();
});
~~~

### a criação dos elementos contendo o verso da bola e a resposta se dá através do método createElement() -> linhas 70, 74, 90 e 94.

~~~javascript
let figure = document.createElement("figure");
~~~

### e usando: elemento-pai.appendChild(elemento-filho) para adicionar hierárquicamente ao html:

~~~javascript
figure.appendChild(img);
~~~

### para esconder/mostrar elementos utilizei uma atribuição de classe nos escutadores de evento, e passando para o css da div uma propriedade display: none/default:

~~~javascript
ballFront.className = "toggle-off";
~~~

~~~javascript
alert.className = "alert-modal-off";
~~~

```
.alert-modal-off {
    display: none;
}
```

###  **OBS:** para facilitar o entendimento, o código javascript foi comentado e dividido em partes.