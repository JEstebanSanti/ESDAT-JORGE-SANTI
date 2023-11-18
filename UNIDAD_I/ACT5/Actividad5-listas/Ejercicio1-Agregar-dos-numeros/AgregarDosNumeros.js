class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  getList() {
    if (this.head === null) {
      return [];
    } else {
      let current = this.head;
      let list = [];
      while (current !== null) {
        list.push(current.data);
        current = current.next;
      }
      return list;
    }
  }

  reverse() {
    let previous = null;
    let current = this.head;
    while (current !== null) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }
}
function addTwoList(listONE, listTWO){
  let number1 = '';
  let number2 = '';

  listONE.forEach(element => {
    number1 += String(element)
  });
  listTWO.forEach(element =>{
    number2 += String(element)
  });
  
  return Number(number1) + Number(number2);
}



export {
  LinkedList,
  addTwoList,
}