// object
// object = { key : value }의 집합체이다.
// key = 우리가 접근할 수 있는 property, property가 가지고 있는 값

// 1. Literals and properties
// 변수 하나당 하나의 값을 담을 수 있다.
const name = 'leeah';
const age = 26;
// 출력할 함수를 만드려면 이름과 값을 각각 파라미터로 전달해줘야한다. 
print(name, age);
// 함수 사용시에도 두가지의 값을 받아올 수 있도록 각각 사용해야한다.
function print(name, age){
    // 이것의 단점은 인자가 많아질 수록 추가해야하는 것들이 늘어난다.
    console.log(name);
    console.log(age);
};

//object를 만드는 방법
// 1) 괄호로 이용해서 만드는 방법 (object literal)
const obt1 ={}; 
// 2)class를 이용하여 만드는 방법 (object constructor)
// object를 new를 이용하여 만들면 object에서 생성된 constructor이 호출된다.
const obj2 = new Object();

// 위에 문제점들을 개선하고자 object를 사용한다.
const leeah = {name:"leeah", age: 26};
function print(person){
    console.log(person.name);
    console.log(person.age);
}
// 호출 시
print(leeah);

// Runtime: 프로그램이 동작하고 있을 때 (동적)
// 뒤늦게 하나의 property를 추가할 수 있다.
leeah.hasJob = false;
console.log(leeah.hasJob);

// 삭제도 가능
delete leeah.hasJob;
console.log(leeah.hasJob);

// 2. Computed properties(계산된 properties)
// key는 무조건 string 타입으로 작성되어야한다.
// .(dot)을 이용해서 접근이 가능하다. => 코딩 하는 순간 dot이라는걸 써서 받아온다.
console.log(leeah.name);
// 배열에서 데이터를 받아오는거 처럼 접근이 가능하다.=> 정확하게 어떤 키가 필요한지 모를 때 사용.
console.log(leeah['name']);
leeah['hasJob'] = false;
console.log(leeah.hasJob);

function printValue(obj, key){
    // object에 key라는 property가 들어있니의 의미
    console.log(obj.key);
    // key를 나중에 적용해서 출력할 때는 []를 이용하여 사용
    console.log(obj [key]);
}
printValue(leeah, 'name');
printValue(leeah, 'age');

// 3. Property value shorthand
//object를 필요할 때 일일히 만들게 되면, 동일한 key와 value를 반복하게 된다.
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age:3 };
const person3 = { name: 'dave', age: 4 };
// makePerson이라는 함수를 호출
const person4 = makePerson('leeah', 26);
console.log(person4);

// name, age값을 받아서 함수 안에서 object를 받아서 리턴
function makePerson(name, age){
    return{
        // Property value shorthand기능으로 
        // key와 value의 값이 동일하다면 생략이 가능하다.
        name,
        age
    }
}
// 클래스에서 object를 만드는거 처럼 작성 => JS에서 알아서 object를 생성해준다.
const person5 = new Person ('leeah', 26);
console.log(person5);
// 4. constructor Function
function Person(name,age){
    // 생략된 것은 새로운 object 만들어서 this에다가 새로운 property를 넣고, this를 return
    // this ={}; 
    this.name=name;
    this.age=age;
    // return this
};

// 5. in operator: property existence check (key in obj)
// key가 object안에 있는지 없는지 확인을 해줌
console.log('name' in leeah);
console.log('age' in leeah);
console.log('random' in leeah);
console.log(leeah.random);

// 6. for..in VS for...of
// for(key in obj)=> obj가 가지고 있는 key들이 {}를 돌때마다 
// key라는 지역변수의 할당이 되어진다. => 모든 키들을 받아와서 처리하고 싶을 때 사용
console.clear();
for(key in leeah){
    console.log(key);
}

// for (value of iterable) => 배열 리스트
const array = [1,2,3,4];
/* for(let i=0; i<array.length; i++){
    console.log(array[i]);
} */
for(value of array){
    console.log(value);
}

//7. Fun cloning
// object.assign(dest, [obj1, obj2, obj3...])
const user ={name: 'leeah', age: 26};
// user2에는 user와 동일한 값을 가지고 있다.(얇은 복사)
const user2 = user; 
user2.name='coder';
console.log(user);

// old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

//JS에 기본적을 탑재 되어있는 object중 하나이다
Object.assign(user3, user);

const user4 = Object.assign({}, user);
console.log(user4);

// 여러 개 source를 전달
const fruit1 ={ color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
// 뒤에있는 property가 앞에있는 property 값을 계속 씌어준다.
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);