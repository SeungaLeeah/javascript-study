'use strict';
// class: template
// object: instance of a class

// 1. class declarations 클래스 선언
class Person{
    // constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        // this는 생성된 object.name 이기 때문에 이름이 출력됨
        console.log(`${this.name}: hello`);
    }
}

const leeah = new Person('leeah', 26);
console.log(leeah.name);
console.log(leeah.age);
leeah.speak();

// 2.Getter and Setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        // get을 정의하는 순간 this.age는 getter를 호출하게되고
        // set을 정의하는 순간 = age를 호출할 때 setter를 호출하게 된다.= 콜스택이 꽉차게 되어버린다.
        // getter와 setter에서 이름을 다른 걸 사용하여 콜스택이 꽉 차는 것을 방지한다.
        this.age = age;
    }
    // get을 이용하여 값을 return 하고
    get age(){
        return this._age;
    }
    // set을 이용하여 값을 setting 할 수 있다. =>대신 값을 설정하기 때문에 value 받아와야 한다.
    set age(value){
        // if (value <0 ){
        //     throw Error ('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

// 객체지향적을 봤을 때 사람의 나이가 -1이 될 수 없다.
// 사용자가 옳지 않게 사용하는 것을 방어하고 방지하도록 만들어주는 것이 Getter와 Setter이다.
const user1 = new User ('Steve', 'Job', -1);
console.log(user1.age);

// 3. Field (Public & Private) 
class Experiment{
    //publicField은 외부에서 접근이 가능
    publicField = 2;
    //#기호를 붙이면 privateField가 되는데, 클래스 내부에서만 값이 보여지고, 변경이 가능하지만.
    // class 외부에서는 이 값을 읽을 수 도 변경할 수 도 없다. 
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static Properties and methods
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber= articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}
const artcle1 = new Article(1);
const artcle2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. 상속과 다양성 Inheritance
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height= height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width * this.height;
    }
}
//extends를 이용하여 확장을 하여 상속하여 재사용 할 수 있다.
class Rectangle extends Shape{}
class Triangle extends Shape{
    // 필요한 함수만 사용하여 재정의가 가능하다 => overWriting
    draw(){
        // super을 이용하여 부모의 draw를 가져올 수 있다.
        super.draw();
        // draw를 재정의 함으로 기존의 값이 아닌 새로 작성한 값이 출력됨
        console.log('⚠️');
    }
    getArea(){
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea()); //크기

const triangle = new Triangle(20, 20 ,'red');
triangle.draw();
console.log(triangle.getArea());