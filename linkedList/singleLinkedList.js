class Node {
  constructor (element) {
    this.element = element;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor () {
    this.head = null;
    this.length = 0;
  }

  append (element) {
    let node = new Node(element), current;

    if (!this.head) { //如果为空则为空链表
      this.head = node; // head是node的引用
    } else {
      current = this.head; // current则为head（用意是从头部开始进行操作）
      while (current.next) { //循环，直到某个节点的next为null
        current = current.next; //如果当前节点的next不为null，那么设下一个节点的next为current
      }
      current.next = node; //current.next为null退出循环（即已到了尾部）,设尾部节点的next为node
    }
    this.length++; //加入节点后，要把长度加一
    console.log('Append successfully');
  }

  insertNode (element, position) {
    if (position >= 0 && position <= this.length) {
      let node = new Node(element),
        current = this.head,
        previous,
        index = 0;

      if (position === 0) {
        node.next = current; //此时head的指向的节点，变为了node指向的节点
        this.head = node; // 而head当然指向node咯
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = node;
        node.next = current;
      }
      this.length++;
      console.log('Insert successfully');
    } else {
      throw new Error('这个单链表中不能从这个位置加入节点');
    }
  }

  removeNode (position) {
    if (position > -1 && position < this.length) { //判断是否存在这position
      let current = this.head, // 同上面一样，用current来循环
        previous,
        index = 0;

      if (position === 0) {
        this.head = current.next; //head变为指向下一个节点
      } else {
        while (index++ < position) { //判断是否为当前的位置
          previous = current; // 现在这个节点就变为前一个节点 （指针变化）
          current = current.next; // 下一个节点变为现在的节点  （指针变化）
        }
        previous.next = current.next; // 当前节点为current，那么移除它，这时前一个的节点就和后一个节点连在一起咯
      }
      this.length--;
      console.log('Remove successfully');
    } else {
      throw new Error('单链表没这个节点哦。');
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


let list = new SingleLinkedList();
list.append(10);
list.print();
list.append({10: [1]});
list.append([10]);
list.append(true);
list.insertNode('cxi', 2);
list.print();
list.removeNode(4);
list.print();