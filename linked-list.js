/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  _get(idx) {
    let node = this.head
    let count = 0;

    while (node !== null && count < idx){
      count += 1;
      node = node.next
    }
    return node
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null){
      this.head = newNode; 
      this.tail = newNode;
    } 
    newNode.next = this.head;
    this.head = newNode;    
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
   return this.removeAt(this.length-1);
  }

  /** shift(): return & remove first item. */

  shift() {
   return this.removeAt(0);    
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid Index")
    }

    return this._get(idx).val

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid Index")
    }

    this._get(idx).val  = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
          throw new Error("Invalid Index")
    }
    if(idx === 0) return this.unshift(val)
    if(idx === this.length) return this.push(val)

    let node = this._get(idx-1);
    let newNode = new Node(val);
    newNode.next = node.next
    node.next = newNode;
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid Index")
    }
    // when the head is being removed
    if(idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length <= 1) this.tail = this.head
      return val
    }

    let node = this._get(idx-1);

    // when the tail is being removed
    if(idx === this.length-1) {
      let val = this.tail.val
      node.next = null
      this.tail = node
      this.length -= 1;
      return val
    }

    let val = node.next.val
    node.next = node.next.next
    this.length -= 1;
    return val
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0) return 0 
    let total = 0
    let node = this.head
    while(node) {
      total += node.val
      node = node.next
    }
    return total / this.length;
  }
}

module.exports = LinkedList;




// class Node {
//   constructor(value) {
//     this.value = value;
//     this.prev = null;
//     this.next = null;
//   }
// }

// class DoublyLinkedList {
//   constructor(vals = []) {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;

//     for (let val of vals) this.push(val);
//   }

//   push(value) {
//     const newNode = new Node(value);

//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }

//     this.length++;
//   }

// }
