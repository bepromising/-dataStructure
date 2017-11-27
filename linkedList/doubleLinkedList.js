class Node {
  constructor (element) {
    this.elememt = element;
    this.previous = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor () {
    this.previous = null;
    this.head = null;
    this.length = 0;
  }

  append (element) {
    let node = new Node(element), current;

    if (!this.length) { // 是新的链表。
      this.head = node; // 链表的头指向新的node。
      node.previous = this.previous; // node的previous指向链表的previous。
    } else {
      current = this.head;

      while (current.next) { // 当前node.next存在。
        current = current.next; // current 变为当前node的下一个。
      } // 当前node的下一个为null的时候，退出循环。
      current.next = node;
      node.previous = current;
    }
    this.length++;
    console.log('Append successfully!');
  }

  insertNode (element, position) {
    console.log(this.length);
    if (position >= 0 && position <= this.length) {
      let node = new Node(element),
        front,
        index = 0,
        current = this.head;

      if (position === 0) { // 如果插入的位置为 0 。
        this.head = node;
        node.previous = this.previous; //node的前一个是链表的previous。
        node.next = current; // node的后一个是之前head所指的，即是current。
      } else {
        while (index++ < position) {
          front = current; // 当前变为前一个。
          current = current.next; // 下一个就变为当前
        }
        front.next = current.previous = node; // 前一个的next 和 当前的previous 是node。
        node.previous = front; // 插入的node的前一个为front。
        node.next = current; // 插入的node的后一个是current。
      }
      this.length++;
      console.log('Insert successfully!');
    } else {
      throw new Error('插入的位置有误啊!');
    }
  }

  removeNode (position) {
    console.log(this.length);
    if (position > -1 && position < this.length) {
      let current = this.head, front, index = 0;

      if (position === 0) { // 位置为 0 。
        this.head = current.next;
        current.next.previous = this.previous;
      } else {
        while (index++ < position) {
          front = current;
          current = current.next;
        }
        if (current.next) { // 这里判断当前node的下一个是否为 null。（例如要删除最后一个是node.next是null的）
          current.next.previous = front; // 当前node的下一个的previous为front。（有点绕口）
        }
        front.next = current.next; // 前一个的下一个为当前node的下一个。 (...绕口)
      }
      this.length--;
      console.log('Remove successfully!');
    } else {
      throw new Error('移除的位置有误啊！');
    }
  }

  print (nextNode) {
    if (!nextNode) {
      nextNode = this.head;
      console.log(nextNode);
    }
    if (nextNode.next) {
      console.log(nextNode.next);
      if (!nextNode.next.next) return nextNode.next.element;
      this.print(nextNode.next);
    }
  }
}

let list = new DoubleLinkedList();
list.append(10);
list.append({10: [1]});
list.append([10]);
list.append(true);
list.print();
list.insertNode('cxi', 2);
list.print();
list.removeNode(4);
list.print();
list.removeNode(1);
list.print();