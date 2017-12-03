class List {
  constructor () {
    this.instance = [];
    // 如果class有私有属性就好了，console.log(this)就不会有instance属性打印出
    // list_2.js 另一种实现方法。
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