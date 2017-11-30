class ArrayStack {
  constructor () {
    this.instance = [];
  }

  push (element) {
    this.instance.push(element);
    console.log('压栈成功');
  }

  pop () {
    this.instance.pop();
    console.log('出栈成功');
  }

  print () {
    this.instance.map( x => console.log(x));
  }
}

let stack = new ArrayStack();

console.log(stack);
stack.push(10);
stack.push('12');
stack.push(true);
stack.push({cxi: 'lin'});
stack.push([1, 2, 3, 4]);
stack.print();
stack.pop();
stack.print();