const form = document.getElementById("my-form");
const cardsContainer = document.getElementById("cards-container");
let idCounter = 1;
let savedCards = JSON.parse(localStorage.getItem("cards")) || [];

// Função para criar um novo card
function createCard(id, nome, email, senha, telefone) {
  // Cria o card com as informações do formulário
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("id", `card-${id}`);
  card.setAttribute("class", `card`);
  card.innerHTML = `
    <p><strong>Id:</strong> ${id}</p>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Senha:</strong> ${senha}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
  `;
  return card;
}

// Renderiza os cards salvos no LocalStorage
function renderCards() {
  savedCards.forEach((cardData) => {
    const card = createCard(
      cardData.id,
      cardData.nome,
      cardData.email,
      cardData.senha,
      cardData.telefone
    );
    cardsContainer.appendChild(card);
    idCounter = cardData.id + 1;
  });
}

// Adiciona um listener para o evento de submit no formulário
form.addEventListener("submit", (event) => {
  event.preventDefault(); // evita que a página seja recarregada

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("mail").value;
  const senha = document.getElementById("password").value;
  const telefone = document.getElementById("phone").value;

  // Cria um objeto com os dados do card
  const cardData = { id: idCounter, nome, email, senha, telefone };
  const card = createCard(idCounter, nome, email, senha, telefone);

  // Adiciona o card ao container
  cardsContainer.appendChild(card);

  // Incrementa o contador de ids
  idCounter++;

  // Adiciona o card aos cards salvos e salva no LocalStorage
  savedCards.push(cardData);
  localStorage.setItem("cards", JSON.stringify(savedCards));

  // Reseta o formulário
  form.reset();
});

// Renderiza os cards salvos no LocalStorage assim que a página carrega
renderCards();
