const criancas = [];

function adicionarCriancas(e){
  e.preventDefault()
  const inNome = document.getElementById("inNome");
  const inIdade = document.getElementById("inIdade");

  const nome = inNome.value;
  const idade = Number(inIdade.value);

  if(nome == "" || inIdade.value == "" || isNaN(idade)){
    alert("Informe corretamente os dados");
    inNome.focus();
    return;
  }
  criancas.push({nome: nome, idade: idade});

  inNome.value = "";
  inIdade.value = "";
  inNome.focus();

  listarCriancas();
}
const btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener('click', adicionarCriancas);


function listarCriancas(){

  if(criancas.length == 0) {
    alert("Não há crianças na lista");
    return;
  }
  let lista = "";

for(let i = 0; i < criancas.length; i++){
  lista += criancas[i].nome + " - " + criancas[i].idade + " anos\n";
}

document.getElementById("outLista").textContent = lista;
const h2 = document.getElementById("h2")
h2.style.display = "block"
}


const btListar = document.getElementById("btListar");
btListar.addEventListener('click', listarCriancas);

function resumirLista(){
  if(criancas.length == 0){
    alert("Não há crianças na lista");
    return;
  }
  const copia = criancas.slice();
  copia.sort(function(a, b){return a.idade - b.idade})

  let resumo = "";

  let aux = copia[0].idade;
  let nomes = [];

  for(let i = 0; i < copia.length; i++){
    if(copia[i].idade == aux){
      nomes.push(copia[i].nome);
    } else{
      resumo += aux + " anos(s): " + nomes.length + " criança(s) - ";
      resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n"
      resumo += "(" + nomes.join(", ") + ")\n\n";
      aux = copia[i].idade;
      nomes = [];
      nomes.push(copia[i].nome); 
    }
  }
  resumo += aux + " ano(s): " + nomes.length + " criança(s) -";
  resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
  resumo += "(" + nomes.join(", ") + ")\n\n";

  document.getElementById("outLista").textContent = resumo;
}

const btResumir = document.getElementById("btResumir");
btResumir.addEventListener('click', resumirLista)