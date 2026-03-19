function calcular() {
  let a = parseFloat(document.getElementById("n1").value);
  let b = parseFloat(document.getElementById("n2").value);

  if (isNaN(a) || isNaN(b)) {
    alert("Digite números válidos!");
    return;
  }

  let media = (a + b) / 2;
  let soma = a + b;
  let produto = a * b;
  let maior = a > b ? a : b;
  let menor = a < b ? a : b;

  document.getElementById("resposta").innerHTML =
    "Média: " + media + "<br>" +
    "Soma: " + soma + "<br>" +
    "Produto: " + produto + "<br>" +
    "Maior número: " + maior + "<br>" +
    "Menor número: " + menor;
}