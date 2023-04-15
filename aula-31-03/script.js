const form = document.getElementById("my-form");
const cardsContainer = document.getElementById("cards-container");
let idCounter = 1;

form.addEventListener("submit", (event) => {
  event.preventDefault(); // evita que a página seja recarregada

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("mail").value;
  const senha = document.getElementById("password").value;
  const telefone = document.getElementById("phone").value;

  // Cria o card com as informações do formulário
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("id", `card-${idCounter}`);
  card.innerHTML = `
      <p><strong>Id:</strong> ${idCounter}</p>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Senha:</strong> ${senha}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
  `;

  // Adiciona o card ao container
  cardsContainer.appendChild(card);

  // Incrementa o contador de ids
  idCounter++;

  // Limpa os campos do formulário
  form.reset();
});
