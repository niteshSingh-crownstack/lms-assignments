export{}
function doSomething(){
    for(var i=0;i<5;i++){
        console.log(i);
    }
    console.log('finally::> '+i);
}
doSomething();

let message ;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

let log =function(message){
    console.log(message);
}
let doLog = (message) => console.log(message);