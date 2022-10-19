const erros = [];

const sorteado = Math.floor(Math.random() * 100) + 1

const chances = 6;

function apostarNumeros(){
  const inNumero = document.getElementById('inNumero');
  const box = document.getElementById('box');
  const numero = Number(inNumero.value);

  if(numero <= 0 || numero > 100 || isNaN(numero)){
    alert('Informe um número válido...');
    inNumero.focus();
    return;
  }
  const outDica = document.getElementById("outDica");
  const outErros = document.getElementById("outErros");
  const outChances = document.getElementById("outChances");

  if(numero == sorteado){
    document.body.style.background = "#84cc16"
    alert("Parabéns!! Você acertou!!");
    btApostar.disable = true;
    btJogar.className = "btn";
    outDica.textContent = "Parabéns!! Número sorteado: " + sorteado;
  } else{
    if(erros.indexOf(numero) >= 0){
      alert("Você já apostou o número " + numero + ". Tente outro...")
    } else {
      erros.push(numero)
      const numErros = erros.length;
      const numChances = chances - numErros
      outErros.textContent = numErros +  " (" + erros.join(", ") + ")";
      outChances.textContent = numChances;
      if(numChances == 0){
        document.body.style.background = "#dc2626"
        alert('Suas chances acabaram...');
        btApostar.disable = true;
        btJogar.className = "btn";
        outDica.textContent = "Game Over!! Numero sorteado: " + sorteado;
      } else{
        const dica = numero < sorteado ? "maior" : "menor";
        outDica.textContent = "Dica: Tente um número " + dica + " que " +  numero;
      }
    }
  }
  inNumero.value = "";
  inNumero.focus();
}
const btApostar = document.getElementById("btApostar");
btApostar.addEventListener('click', apostarNumeros)

function jogarNovamente(){
  location.reload(); 
}

const btJogar = document.getElementById('btJogar');
btJogar.addEventListener('click', jogarNovamente)