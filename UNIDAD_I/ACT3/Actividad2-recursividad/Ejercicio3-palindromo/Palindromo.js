function palindromo(str) {
    // Limpia la cadena de espacios y caracteres no alfabéticos
    str = str.toLowerCase().replace(/[^a-z]/g, '');
  
    // Función recursiva para verificar si es un palíndromo
    function palindromoRecursivo(s) {
      if (s.length <= 1) {
        return true;
      }
  
      if (s[0] === s[s.length - 1]) {
        return palindromoRecursivo(s.slice(1, -1));
      } else {
        return false;
      }
    }
  
    return palindromoRecursivo(str);
  }
  
  export {palindromo}
  