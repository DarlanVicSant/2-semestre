function verificarVoto() {
  const idade = document.getElementById("idade").value;

  if (idade === "") {
    document.getElementById("resultado").innerHTML = "Digite sua idade!";
    return;
  }

  let mensagem = "";

  if (idade < 16) {
    mensagem = "❌ Não pode votar";
  } else if (idade >= 16 && idade <= 17) {
    mensagem = "⚠️ Voto opcional";
  } else if (idade >= 18 && idade <= 65) {
    mensagem = "✅ Voto obrigatório";
  } else if (idade > 65) {
    mensagem = "⚠️ Voto opcional";
  }

  document.getElementById("resultado").innerHTML = mensagem;
}