function calcularMedia() {
  let n1 = parseFloat(document.getElementById("nota1").value);
  let n2 = parseFloat(document.getElementById("nota2").value);
  let n3 = parseFloat(document.getElementById("nota3").value);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    document.getElementById("resultado").innerHTML = "Preencha todas as notas!";
    return;
  }

  let media = (n1 + n2 + n3) / 3;
  let status = media >= 7 ? "Aprovado ✅" : "Reprovado ❌";

  document.getElementById("resultado").innerHTML =
    `Média: ${media.toFixed(2)} <br> Situação: ${status}`;
}