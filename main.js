const perguntas = [
    "Qual a complexidade da inserção de um novo nó no início de uma lista encadeada simples?",
    "Qual é a desvantagem de listas encadeadas em comparação a arrays?",
    "Como se pode verificar se uma lista encadeada está vazia?",
    "Quais são as principais características das listas encadeadas?",
    "Quantos ponteiros existem em cada nó de uma lista encadeada simples?",
    "Quais são as principais vantagens das listas encadeadas em relação a arrays?",
    "Qual é o custo de acessar o último elemento em uma lista encadeada simples?",
    "O que diferencia uma lista encadeada simples circular de uma lista encadeada simples?",
    "Quais são as vantagens da lista duplamente encadeada em relação à lista simples?",
    "O que é uma lista duplamente encadeada circular?",
    "Qual a principal característica de uma pilha?",
    "Quais são as operações básicas de uma pilha?",
    "O que acontece quando a pilha atinge seu limite de capacidade em um vetor fixo?",
    "Como é implementada a operação de empilhar em uma pilha com lista encadeada?",
    "Qual é a complexidade de tempo da operação de empilhar e desempilhar em uma pilha?",
    "Qual é a característica principal de uma fila?",
    "Quais são as operações básicas de uma fila?",
    "Qual a vantagem de implementar filas com listas encadeadas?",
    "Como funciona a remoção em uma fila com listas encadeadas?",
    "Como você adiciona um elemento a uma fila?"
];

const respostas = [
    "A complexidade é O(1), pois tem um custo constante de tempo.",
    "Elas consomem mais memória devido aos ponteiros adicionais em cada nó.",
    "Uma lista encadeada é considerada vazia se o ponteiro 'head' for nulo (null).",
    "Estrutura de dados dinâmica, composta por nós que armazenam dados e ponteiros para os próximos nós.",
    "Existe um total de 1 ponteiro em cada nó.",
    "Permitem inserções e remoções dinâmicas sem realocação de memória.",
    "O custo é linear (O(n)), pois é necessário percorrer a lista do início até o final.",
    "Em uma lista encadeada simples circular, o último elemento aponta para o primeiro, formando um ciclo.",
    "Ela permite percorrer a lista em ambas as direções.",
    "É uma lista onde o último elemento aponta para o primeiro e o primeiro para o último, permitindo um ciclo nos dois sentidos.",
    "É uma estrutura LIFO (Last In, First Out), onde o último elemento inserido é o primeiro a sair.",
    "As operações básicas são empilhar (push), desempilhar (pop) e verificar o elemento no topo (top).",
    "Um erro de overflow ocorre ou é necessário redimensionar o vetor.",
    "Um novo elemento é adicionado e o ponteiro de topo é atualizado para o novo elemento.",
    "Ambas as operações têm complexidade O(1), pois são executadas em tempo constante.",
    "É uma estrutura FIFO (First In, First Out), onde o primeiro elemento a entrar é o primeiro a sair.",
    "As operações básicas são enfileirar (enqueue) e desenfileirar (dequeue).",
    "Não há limite de tamanho, pois a fila pode crescer conforme necessário.",
    "O elemento da frente é removido e o ponteiro de início é atualizado para o próximo elemento.",
    "Para adicionar um elemento, você usa a operação de enfileirar, que coloca o elemento no final da fila."
];

const memoryGameContainer = document.querySelector('.memory-game');

// Função para criar as cartas
function createCards() {
    const cardsArray = [];

    // Criando as cartas de "?"
    perguntas.forEach((pergunta, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', index);  // Atribuindo o índice à carta

        // Adicionando o "?" nas cartas de perguntas
        card.innerText = "?";

        // Adicionando evento de clique para expandir
        card.addEventListener('click', () => expandCard(card));

        cardsArray.push(card);
    });

    // Criar pares de cartas com perguntas e respostas
    const allCards = [...cardsArray, ...cardsArray];

    // Embaralhando as cartas
    shuffleCards(allCards);

    // Adicionando as cartas ao contêiner
    allCards.forEach(card => memoryGameContainer.appendChild(card));
}

// Função para embaralhar as cartas
function shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

// Função que lida com a expansão da carta
function expandCard(card) {
    const cardId = card.getAttribute('data-id');
    const correspondingCard = document.querySelector(`.card[data-id='${cardId}']`);

    if (card.innerText === "?") {
        card.innerText = respostas[cardId];  // Revela a resposta
    }
}

// Criar as cartas na inicialização
createCards();
