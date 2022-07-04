const cachorros = require('./database/cachorros.json');
const fs = require('fs');
const path = require('path');

function salvar(){

    let arquivo = path.resolve('./database/cachorros.json');
    let json = JSON.stringify(cachorros, null, 4);
    
    fs.writeFileSync(arquivo, json);
}
salvar();

// function buscar(id){
//   let mesmoId = cachorros.id = id ? true : false;
//   console.log(cachorros.id);
  
// }
// return cachorros.find(mesmoId);
(codigoBuscado) => {

  function Buscar(id){
      if(cachorros.id == codigoBuscado){
          return true;
      } else {
          return false;
      }
  }

  return cachorros.find(codigoBuscado);
  
  Buscar(1);
}


module.exports = {
    
  salvar,
  buscar,

}