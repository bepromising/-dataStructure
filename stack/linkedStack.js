class Node {
  constructor (element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedStack { // 链式存储
  constructor () {
    this.top = null; // 栈顶指针
    this.bottom = null; // 栈底指针
    this.length = 0;
  }

  push (element) {
    let node = new Node(element);

    if (!this.top) { // 栈顶为空
      this.top = this.bottom = node; // 栈顶为node
    } else {
      let front = this.top;
      this.top = front.next = node; // 前一个的next 和 栈顶 都指向 node
    }
    this.length++;
    console.log('压栈成功啦！');
  }

  pop () {
    let node = this.bottom, front;
    if (!node) { // 栈底为空？ 那就是空栈咯。
      console.log('null stack');
    } else {
      while (node.next) { // 当node.next为null，退出循环
        front = node; // 当node.next不为null，那么front指向这个node
        node = front.next; // node 重新指向 front的下一个
      }
      this.top = front; //node的next为null时，说明node为栈顶了，那么栈顶要指向前一个front
      front.next = null; // front.next就为null了，不能指向node了，因为node出栈咯。
    }
    this.length--;
    console.log('出栈成功！');
  }

  print (node) {
    if (!node) {
      node = this.bottom;
      console.log(this.bottom);
    }
    if (node.next) {
      console.log(node.next);
      if (!node.next.next) return node.next.element;
      this.print(node.next);
    }
  }
}

let stack = new LinkedStack();

stack.push(10);
stack.push('12');
stack.push(true);
stack.push({cxi: 'lin'});
stack.push([1, 2, 3, 4]);
stack.print();
stack.pop();
stack.print();