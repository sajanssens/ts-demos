import { BrokenThis } from "./BrokenThis";

// HelloWorld.sayHello();
// ObservableDemo.demo();
// ObservableDemo.demo2();

const bt = new BrokenThis();
const some = bt.doSomething.call('xyz');
const some2 = bt.doSomething2.call('xyz');

console.log(some);
console.log(some2);
