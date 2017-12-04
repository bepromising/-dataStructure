class Node {
  constructor (element) {
    this.elememt = element;
    this.previous = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor () {
    this.head = null;
    this.length = 0;
  }

  /**
   * 
   * @param element 用来实例节点的数据,什么数据类型都行. 
   */
  append (element) {
    let node = new Node(element), current;

    if (!this.length) {                 // 长度为0，则是新的链表。
      this.head = node;                 // 链表的头指向新的node。
    } else {
      current = this.head;              // current获得指向第一个节点的指针。

      while (current.next) {           // 当前node.next存在。
        current = current.next;        // 如果当前节点（current）的next不为null，那么current.next这个指针就给了current。
      }                                // current的下一个为null的时候，退出循环。
      current.next = node;             // current.next为null退出循环（即已到了最后一个节点）,那么它的next为node
      node.previous = current;         // 新加入的node的前一个就是current。
    }
    this.length++;                     // 长度加一，别忘咯。
    console.log('Append successfully!');
  }

  /**
   * @param element
   * @param {Number} position 要插入的某个位置. 
   */
  insertNode (element, position) {
    if (position >= 0 && position <= this.length) {
      let node = new Node(element),
        front,
        index = 0,
        current = this.head;

      if (!position) {                 // 如果插入的位置为 0 。
        this.head = node;
        node.next = current;           // node的后一个是之前head所指的，即是current。
      } else {
        while (index++ < position) {
          front = current;             // 当前变为前一个。
          current = current.next;      // 下一个就变为当前
        }
        front.next = current.previous = node; // 前一个的next 和 当前的previous 是node。
        node.previous = front;         // 插入的node的前一个为front。
        node.next = current;           // 插入的node的后一个是current。
      }
      this.length++;
      console.log('Insert successfully!');
    } else {
      throw new Error('插入的位置有误啊!');
    }
  }

  /**
   * 
   * @param {Number} position 
   */
  removeNode (position) {
    if (position > -1 && position < this.length) {
      let current = this.head, front, index = 0;

      if (!position) {                           // 位置为 0 。
        this.head = current.next;
        current.next.previous = this.previous;
      } else {
        while (index++ < position) {
          front = current;
          current = current.next;
        }
        if (current.next) {                      // 这里判断当前node的下一个是否为 null。（例如要删除最后一个是node.next是null的）
          current.next.previous = front;         // 当前node的下一个的previous为front。（有点绕口）
        }
        front.next = current.next;               // 前一个的下一个为current的下一个。 (...绕口)
      }
      this.length--;
      console.log('Remove successfully!');
    } else {
      throw new Error('移除的位置有误啊！');
    }
  }

  print () {
    let arr = [this.head];
    let node = this.head;
    while (node.next) {
      node = node.next;
      arr.push(node);
    }

    arr.map( (x, index) => console.log(`第${index + 1}个节点是`, x));
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