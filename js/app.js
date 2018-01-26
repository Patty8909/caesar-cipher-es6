// Se le muestra al usuario un menu de opciones para Cifrar y Descifrar 
let option = prompt(`Elija una de las opciones
1. Cifrar
2. Decifrar
3. Salir`);
if (option === '3') {
  alert('Regrese pronto');
} else if (option !== '1' && option !== '2') {
  alert('Solo ingrese opci\u00F3n 1 o 2');
  option = null;
} else {
  var phrase = prompt('Ingrese su frase por favor');
}

for (let i = 0; i < phrase.length; i++) {
  if (phrase.charCodeAt(i) === ' '.charCodeAt() || isNaN(phrase) === false) {
    alert('No ingrese n\u00FAmeros ni espacios en blanco');
    phrase = prompt('Ingrese su frase por favor');
  }
}
      
// Función para Cifrar
function cipher(phrase) {
  let strLet = '';                                  
  
  for (let i = 0; i < phrase.length; i++) {
    const asc = phrase.charCodeAt(i);               
    
    if (asc >= 65 && asc <= 90) {
      let newAsc = (asc - 65 + 33) % 26 + 65;        
      let newLet = String.fromCharCode(newAsc);
      strLet += newLet;                         
    } else if (asc >= 97 && asc <= 122) {
      let newAscm = (asc - 97 + 33) % 26 + 97;         
      let newLetm = String.fromCharCode(newAscm);
      strLet += newLetm;                      
    }  
  } 
  return strLet;                                  
}

// Función para Descifrar

function decipher(phrase) {
  let strLet = '';                                 
  for (i = 0; i < phrase.length; i++) {
    const asc = phrase.charCodeAt(i);               
    if (asc >= 65 && asc <= 90) {
      let newAsc = (asc + 65 - 33) % 26 + 65;       
      let newLet = String.fromCharCode(newAsc);  
      strLet += newLet;                               
    } else if (asc >= 97 && asc <= 122) {
      let newAscm = (asc + 97 + 33) % 26 + 97;         
      let newLetm = String.fromCharCode(newAscm);
      strLet += newLetm;                      
    }
  }
  return strLet;                                  
}
// Resultado, cifrar o decifrar frase
if (option === '1') {
  alert(`Texto original: ${phrase}
  Texto Cifrado: ${cipher(phrase)}`);
} else if (option === '2') {
  alert(`Texto original: ${phrase}
  Texto Decifrado: ${decipher(phrase)}`);
}
