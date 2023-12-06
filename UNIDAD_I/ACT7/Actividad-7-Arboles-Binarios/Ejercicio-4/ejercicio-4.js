
// Clase que representa un nodo del árbol
class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
  }
  get isLeaf(){
    return this.izquierda === null && this.derecha === null
  }
}

// Clase que representa el árbol binario
export class ArbolBinario {
  constructor() {
    this.raiz = null;
  }
  
  // Método para insertar un nuevo nodo en el árbol
  insertar(valor) {
    if (!Number.isInteger(valor)) {
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

  /* 
   Metodo de Busqueda usando Recursividad
  buscar(node, valorx) {
      if (node === null) {
          return null;
      }
      else if( node.valor < valorx) {
          return this.buscar(node.derecha, valorx)
      }
      else if( node.valor > valorx) {
          return this.buscar(node.izquierda, valorx)
      }
      else {
          return node
      }
  } */
  // MEtodo de busqueda
  buscar(valor) {
    if (!this.raiz) return false
    let current = this.raiz
    let found = false
    while (current && !found) {
      if (valor < current.valor) {
        current = current.izquierda
      } else if (valor > current.valor) {
        current = current.derecha
      } else {
        found = current
      }

    }
    if (!found) return undefined
    return found
  }

  // Este metodo borra el nodo - si tienen hijos mueve los nodos 
  eliminar(valor) {
    const removerNodo = (node, valor) =>{
        if(node === null) {
            return null
        }          
        if(valor === node.valor) { 
            // no hijos
            if(node.isLeaf){
                return null
            }
            // no hay plebe en izquierda
            if(node.izquierda === null){
                return node.derecha
            }
            // no chamaco en derecha
            if(node.derecha === null){
                return node.izquierda
            }
            // si tiene los dos chispayates
            let tempNodo = node.derecha
            while(tempNodo.izquierda !== null){
                tempNodo = tempNodo.izquierda
            }
            node.valor = tempNodo.valor
            node.derecha = removerNodo(node.derecha, tempNodo.valor)
            return node
        }
        else if(valor < node.valor) {
            node.izquierda = removerNodo(node.izquierda, valor)
            return node
        }
        else {
            node.derecha = removerNodo(node.derecha, valor)
            return node
        }
    }
    this.raiz = removerNodo(this.raiz, valor)
  }
   // Mover un nodo de una ubicación a otra
   moverNodo(valor, nuevoPadreValor) {
    const nodoAMover = this.buscar(valor);

    if (nodoAMover) {
      // Eliminar el nodo original
      this.eliminar(valor);

      // Insertar el nodo en la nueva ubicación
      const nuevoPadre = this.buscar(nuevoPadreValor);
      if (nuevoPadre) {
        if (valor < nuevoPadre.valor) {
          nuevoPadre.izquierda = nodoAMover;
        } else {
          nuevoPadre.derecha = nodoAMover;
        }
      } else {
        // Si el nuevo padre no existe, simplemente insertar el nodo en la raíz
        this.raiz = nodoAMover;
      }
    }
  }

}







