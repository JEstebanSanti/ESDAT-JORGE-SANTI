// Implementación de una pila utilizando un arreglo
export class Stack {
    constructor() {
      this.elements = [];
    }
  
    push(element) {
      this.elements.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        throw new Error("La pila esta vacia");
      }
      return this.elements.pop();
    }
  
    isEmpty() {
      return this.elements.length === 0
    }
  
    size() {
      return this.elements.length;
    }
  
    peek() {
      if (this.isEmpty()) {
        return this.elements;
      }
      return this.elements[this.elements.length - 1];
    }
  }

  
  