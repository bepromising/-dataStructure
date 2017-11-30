function List () {
  var instance = [];

  return {
    push (element) {
      instance.push(element);
      console.log('入队成功！');
    },
    unshift () {
      instance.unshift();
      console.log('出队成功!');
    },
    print () {
      instance.map( x => console.log(x));
    }
  };
}

let list_1 = List();
console.log('-------------- list_1 ---------------------');
list_1.push(10);
list_1.print();
console.log('list_1是List的实例子吗？', list_1 instanceof List); // list_1不是List的实例，这个大家可以看出来。

console.log();

let list_2 = List();
console.log('-------------- list_2 ---------------------');
list_2.push(123123123);
list_2.print();

// list_1 和 list_2 是不同的对象哦！（好吧，大家也看出来了.）