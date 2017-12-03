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

  /**
   * @param element 一个数据，可以是任何的数据类型.
   */
  append (element) {
    let node = new Node(element), // 实例化一个节点。
      current;

    if (!this.head) {             // 如果为空则为空链表
      this.head = node;           // 链表头（head）指向第一个节点node。
    } else { // 不是空链表
      current = this.head;       // current也指向了第一个节点（用来从头部开始进行操作，且为了不改变head的指向）
      while (current.next) {     // 循环，直到某个节点的next为null
        current = current.next;  // 如果当前节点（current）的next不为null，那么current.next这个指针就给了current。
      }
      current.next = node;       //current.next为null退出循环（即已到了最后一个节点）,那么它的next为node
    }
    this.length++;               //加入节点后，要把单链表长度加一。
    console.log('Append successfully');
  }

  /**
   * @param element 一个数据，可以是任何的数据类型.
   * @param {Number} position 要插入的某个位置. 
   */
  insertNode (element, position) {
    if (position >= 0 && position <= this.length) { // 判断插入的位置。
      let node = new Node(element),
        current = this.head, // current是指向第一个借点咯。
        previous, // 指向前一个节点的指针。
        index = 0;

      if (position === 0) {
        node.next = current; //此时head的指向的节点，变为了node指向的节点
        this.head = node; // 而head当然指向node咯
      } else {
        while (index++ < position) { // index是否是要插入的位置，不是就+1。
          previous = current;        // 不是当前位置，那么current这个指针就交给previous。
          current = current.next;    // 这个跟append方法一样的。
        }                            // 是当前位置啦，就退出循环。
        previous.next = node;        // 前一个节点的next指向node（插入的节点）
        node.next = current;         // node.next就是current啦。
      }
      this.length++;
      console.log('Insert successfully');
    } else {
      throw new Error('这个单链表中不能从这个位置加入节点');
    }
  }


  /** 
   * @param {Number} position 要删除节点的位置
   */
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

  print () {
    let arr = [this.head];
    let node = this.head;
    while (node.next) {
      node = node.next;
      arr.push(node);
    }
    arr.map( (x, index) => {
      console.log(`第${index + 1}个节点是:`);
      console.log(x);
    });
  }
}


let list = new SingleLinkedList();
list.append(10);
list.append({10: [1]});
list.append([10]);
list.append(true);
list.insertNode('cxi', 2);
list.removeNode(4);
list.print();