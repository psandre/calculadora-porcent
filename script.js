const valorInput = document.getElementById("cxvalor");
const porcentagemInput = document.getElementById("cxporcentagem");
const botaoCalcular = document.getElementById("calcular");
const resultadoSpan = document.getElementById("resultado");

function calcularPorcentagem() {
  const valor = parseFloat(valorInput.value);
  const porcentagem = parseFloat(porcentagemInput.value);

  if (isNaN(valor) || isNaN(porcentagem)){
    resultadoSpan.textContent = "digite valores validos";
    return;
    
  }

  const resultado = (valor * porcentagem) /100;
  resultadoSpan.textContent = resultado.toFixed(2);

  

}

botaoCalcular.addEventListener("click", calcularPorcentagem);