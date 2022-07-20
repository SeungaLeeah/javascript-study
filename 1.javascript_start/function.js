// function 함수
// -fundamental building block in the program 프로그램을 구성하는 기본적인 블럭이다.
// - subprogram can be used multiple times 재사용이 가능하다
// - performs a task or calculates a value 한 가지의 task나 어떠한 값을 계산하기 위해서 사용

// 1. 함수 정의
// function name(param1, param2) {body... return;}
// 하나의 함수 === 한 가지의 일 만 실행
// 함수의 이름 작성시, 동사 형태로 지정
// JS에서 function은 object이다 

function printHello(){
    console.log('Hello');
}
// 함수 호출
printHello();

// 2. Parameters
// Primitive Type(원시타입) => string, number, boolean, undefined, null : passed by value
// Reference Type (참조/주소 타입) => object(array, function, map, set, weakmap,weakset) : passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
// parameter 값이 작성되지 않았을 경우 기본 값을 함수안에 적용하기
function showMessage(message, from='unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi');

//4. Rest parameters (added in ES6) => 배열형태로 전달
function printAll(...args){
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }
    args.forEach((arg)=> console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope (밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.)
let globalMessage = 'global'; // global variable
function printMessage (){
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);

    // 자식은 부모에게 주어진 message를 확인 할 수 있다. 
    // 하지만 부모에서 자식 message는 볼 수 없다.
    function printAnother(){
        console.log(message);
        let childMessage = 'hello'
    }
}
printMessage();

// 6. Return a value
function sum(a,b){
    return a + b;
}
const result = sum(1,2); // 3
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic...
    }
}

// good
function upgradeUser(user){
    if(user.point > 10){
        // 조건이 맞지 않을 때는 빨리 return
        return;
    }
    // 조건이 맞을 때는 실행
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression = 할당된 다음부터 호출이 가능
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
//function을 print에 할당함
const print = function (){  // 함수에 이름이 없는 함수를 anonymous function 이다.
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. callback hell function using function expression
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
    printYes();
    }else{
        printNo();
    }
}

// 함수이름이 없는 함수 anonymous function 
const printYes = function(){
    console.log('yse!');
};

// named function
// debugging 할때 이름을 보기 위하여 함수에 이름을 할당함.
const printNo = function print(){
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// 화살표 함수 (Arrow function) 
// always anonymous
/* const simplePrint =function(){
    console.log('simplePrint!');
} */
const simplePrint = () => console.log('simplePrint!');

/* const add = function(a,b){
    return a+b;
} */
// 하나의 함수만 사용하는 경우는 한줄로 작성이 가능
const add = ( a, b) => a + b;
// 여러 개의 함수를 사용할 경우 => return으로 값을 return 해줘야 한다.
const simpleMultiply = (a,b)=>{
    //do something more
    return a*b;
};

// IIFF: Immediately Invoked Function Expression
// 함수를 선언함과 동시에 호출이 가능함. => 최근에는 사용도가 낮아짐 
(function hello(){
    console.log('IIFF');
})();
