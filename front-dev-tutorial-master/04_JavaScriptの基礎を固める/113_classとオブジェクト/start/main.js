const obj = {
  first_name : 'Mafia',
  last_name : 'Code',
  printFullName: () => {
    console.log('hello');
  }
}

class MyObj {
  constructor() {
    this.first_name = 'Mafia';
    this.last_name = 'Code';
  }
  printFullName = () => {
    console.log('hello');
  }
}

const obj2 = new MyObj();
obj2.printFullName();
console.log(obj2);

