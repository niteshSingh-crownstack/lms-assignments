"use strict";
exports.__esModule = true;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('finally::> ' + i);
}
doSomething();
