class List {
  constructor () {
    this.instance = [];
  }

  push (element) {
    this.instance.push(element);
    console.log('入队成功！');
  }

  unshift () {
    this.instance.unshift();
    console.log('出队成功!');
  }

  print () {
    this.instance.map( x => console.log(x));
  }
}

let list = new List();

list.push(10);
list.push('12');
list.push(true);
list.push({cxi: 'lin'});
list.push([1, 2, 3, 4]);
list.print();
list.unshift();
list.print();