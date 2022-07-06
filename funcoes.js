const cachorros = require('./database/cachorros.json');
const fs = require('fs');
const path = require('path');

function salvar(cachorros){

    let arquivo = path.resolve('./database/cachorros.json');
    let json = JSON.stringify(cachorros, null, 4);
    
    fs.writeFileSync(arquivo, json);
}
// salvar();

// function buscar(id){
//   let mesmoId = cachorros.id = id ? true : false;
//   console.log(cachorros.id);
  
// }
// return cachorros.find(mesmoId);
function buscar(id){
  function temIdIgual(cachorro){
    if(cachorro.id == id){
      return true;
  } else {
      return false;
  }
  }
  let cachorroEncontrado = cachorros.find(temIdIgual);
  if (cachorroEncontrado){
      return cachorroEncontrado;
  } else {
    return "Carrocho não encontrado verifique o ID."
  }
}

console.log(buscar(10));

module.exports = {
    
  

}