// Callbacks in Node.js are a fundamental part of its asynchronous programming model.
// They allow functions to be executed after a certain task is completed, enabling non-blocking operations.

function greetings(ename, callback) {
    console.log("hello " + ename);
    callback();
}

function byeBye() {
    console.log("its time to say.. goodbye!!");
}

greetings("suraj", byeBye);