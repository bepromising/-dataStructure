class Dictionarl {
  constructor () {
    this.dataStore = new Array();
  }

  add (key, value) {
    this.dataStore[key] = value;
  }

  find (key) {
    return this.dataStore[key];
  }

  remove (key) {
    delete this.dataStore[key];
  }

  showAll () {
    for (let key of this.dataStore) {
      console.log(`${key} --> ${this.dataStore[key]}`);
    }
  }
}

let a = new Dictionarl();
a.add('cxi', '1');
a.add('yy', /cxi/);
a.add('lin', 2);
a.add('1', true);
a.remove('1');
a.showAll();
