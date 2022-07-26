'use strict';

// Array(배열);

// 1. 배열 선언(Declaration)
const arr1 = new Array();
const arr2 = [1, 2];

// 2. 인덱스 위치 통해 접근 (Index position)
const foods = ['🍟','🍔'];
console.log(foods);
console.log(foods.length);
// 숫자(인덱스)를 전달하게 되면, 인덱스에 해당하는 value들을 받아올 수 있다. 
console.log(foods[0]);
console.log(foods[1]);
console.log(foods[2]);
// 배열의 맨 마지막에 접근을 하는 방법
// 길이가 일정하지 않기 때문에 배열의 길이에서 -1을 해서 접근을 함
// 배열은 0부터 시작하기 때문에 -1을 해야함
console.log(foods.length -1);

console.clear();
// 3. Looping over an array
// print all foods
// a) for
for( let i =0; i<foods.length; i++){
    console.log(foods[i]);
}

// b. for of
for(let food of foods){
    console.log(food);
}

// c. forEach => 배열 안에 들어있는 value들 마다 내가 전달한 함수를 출력함
foods.forEach((food) => console.log(food));

// 4. Addtion, deletion, copy
// push: add an item to the end => 맨 마지막에 아이템 넣기
foods.push('🥐','🍲','🥚');
console.log(foods);

// pop: remove an item from the end => 맨 마지막 아이템 삭제
// pop은 지워지는 아이들이 리턴이 됨
const poped = foods.pop();
console.log(poped);
foods.pop();
foods.pop();
console.log(foods);

// unshift: add an item to the beginning => 맨 앞에 아이템 넣기
foods.unshift('🥚','🍲');
console.log(foods);

// shift: remove an item from the beginning => 맨 마지막 아이템 삭제
foods.shift();
foods.shift();
console.log(foods);

// note!! shift, unshift are slower than pop, push
// pop & push 기존의 배열들을 움직이지 않고 add, remove 되지만,
// shift, unshift는 기존의 배열들을 원하는 배열의 add, remove에 맞춰 움직이기 때문에 느리다.


// 지정된 배열을 삭제하는 방법 
// splice: remove an item by index position
foods.push('🍲','🥚','🥪','🍣');
console.log(foods);
//foods.splice(indexNumber,count)
// count 지정을 안하면, indexNumber부터 다 지워짐
foods.splice(3,1);
console.log(foods);
// foods.splice(indexNumber,count,new something);
// indexNumber에 위치의 것을 count만큼 지우고 new something을 새로 넣어줌
foods.splice(4,1,'🍕','🌮','🍦');
console.log(foods);

// concat: 두가지의 배열을 묶어서 사용 (combine two arrays)
const foods2= ['🍗','🍉','🍜'];
const newFoods = foods.concat(foods2);
console.log(newFoods);

// 5. Searching(검색 할 수 있는 배열)
// find the index
console.clear();
console.log(foods);

// indexOf : 몇 번째 index에 있는지 찾아주는 Array
// 배열 안에 원하는 값이 없는 경우 -1
console.log(foods.indexOf('🥚'));

// includes: index에 원하는게 있는지 없는지 검사해주는 Array
// 배열 안에 원하는 값이 있는 경우 true, 없는 경우 false
console.log(foods.includes('🍜'));
console.log(foods.includes('🥚'));

// lastIndexOf : 중복되는 값이 있을 경우, 마지막 값을 출력해줌
console.clear();
foods.push('🥚');
console.log(foods);
console.log(foods.indexOf('🥚'));
console.log(foods.lastIndexOf('🥚'));