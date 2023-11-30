// Clase que representa un nodo del árbol
class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.izquierda = null;
      this.derecha = null;
    }
  }
  
  // Clase que representa el árbol binario
export  class ArbolBinario {
    constructor() {
      this.raiz = null;
    }
  
    // Método para insertar un nuevo nodo en el árbol
    insertar(valor) {
        if(!Number.isInteger(valor)){
          return new TypeError('No son numeros enteros') 
        }
        const nuevoNodo = new Nodo(valor);
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
            return true
        } else {
            this.insertarNodo(this.raiz, nuevoNodo);
            return true
        }
       
    }
  
    // Método auxiliar para insertar un nodo en una posición específica del árbol
    insertarNodo(nodo, nuevoNodo) {
      if (nuevoNodo.valor < nodo.valor) {
        if (nodo.izquierda === null) {
          nodo.izquierda = nuevoNodo;
        } else {
          this.insertarNodo(nodo.izquierda, nuevoNodo);
        }
      } else {
        if (nodo.derecha === null) {
          nodo.derecha = nuevoNodo;
        } else {
          this.insertarNodo(nodo.derecha, nuevoNodo);
        }
      }
    }
  
  }