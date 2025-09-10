// Captura do botão
const btnEntrar = document.getElementById("btnEntrar");

// Adicionando Event Listener
btnEntrar.addEventListener("click", function (event) {
  event.preventDefault(); // evita recarregar a página

  // Captura dos valores
  const url = document.getElementById("url").value;
  const email = document.getElementById("email").value;
  const nickname = document.getElementById("nickname").value;

  // Salvando no Local Storage
  localStorage.setItem("chat_url", url);
  localStorage.setItem("chat_email", email);
  localStorage.setItem("chat_nickname", nickname);

  // Mensagem no console
  console.log("Dados salvos no Local Storage!");
});