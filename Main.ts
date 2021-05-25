
// HelloWorld.sayHello();

import {ObservableDemo} from "./ObservableDemo";

ObservableDemo.demo();
ObservableDemo.demo2();

// const bt = new BrokenThis();
// const some = bt.doSomething.call('xyz');
// const some2 = bt.doSomething2.call('xyz');

// console.log(some);
// console.log(some2);

function add(x: number, y: number): number {
    return x + y;
}

// add2: (x: number, y: number) => number = (x: number, y: number) => x+y;


const sum = add(1, 2);
// add2(2, 2);
