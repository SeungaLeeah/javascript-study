// Q1. make a string out of an array
// 하나의 배열을 하나의 문자열로 변환 => join
//join()안에 어떤 것을 넣어주냐에 따라 원하는 구분자를 사용할 수 있음
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('|');
    console.log(result);
}
  
  // Q2. make an array out of a string
  // 주어진 문자열을 배열로 변환 => split
  // split(',')같은 구분자를 꼭 전달 해줘야한다. 전달이 안되면 하나의 문자열로 출력이 됨.
  // 구분자 뒤에 , 숫자를 넣으면 limit을 지정 할 수 있다.
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  // 주어진 배열의 순서를 거꾸로 만들기 =>reverse
  // 배열과 리턴 값을 변환해준다.
  {
    const array = [1, 2, 3, 4, 5];
    const result=array.reverse();
    console.log(result);
    console.log(array);
  }
  
  // Q4. make new array without the first two elements
  // 1,2번째 요소를 제외한 나머지 요소로 새로운 배열 만들기 => slice
  // splice는 배열 자체를 수정, slice는 배열에서 원하는 부분만 수정
  // slice는 (2,4)를 작성하면 4의 값은 불러오지 않음.
  {
    const array = [1, 2, 3, 4, 5];
    const result  = array.slice(2,5);
    console.log(result);
    console.log(array);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  // 학생의 점수가 90점인 학생 찾기 => find
  {
    const result = students.find((student)=> student.score === 90);
    console.log(result);
  }
  
  // Q6. make an array of enrolled students
  // 수업에 등록한 학생들만 찾기 => filter
  {
    const result = students.filter((student)=> student.enrolled);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  // 학생들의 점수만 뽑아오기 => map
  {
    const result = students.map((student)=> student.score);
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  // 학생 중 점수가 50점보다 낮은 학생이 있는지 없는지 확인 => some, every
  // 조건 중 하나라도 만족하는 조건이 있다면 true가 리턴이 됨. => some
  // 조건에 모든 요소들이 충족되어야지 true가 리턴이 됨 => every
  {
    console.clear();
    const result = students.some((student)=>student.score<50);
    console.log(result);
    
    const result2 = !students.every((student)=>student.score>=50);
    console.log(result2);
  }
  
  // Q9. compute students' average score
  // 학생들의 평균 점수 구하기 => reduce
  // prev=이전값, curr= 최근 값
  // reduceRight은 맨 뒤에부터 시작
  {
    const result = students.reduce((prev, curr)=>{
      console.log(prev);
      console.log(curr);
      //prev는 이전의 curr에서 리턴된 값이 주어진다. 
      // curr은 배열의 item을 순차적으로 전달 받는다.
      return prev + curr.score;
    //시작을 0으로 하기 위해 0 값을 줌
    },0);
    console.log(result);
  }
  {
    // 한줄로 정리
    const result = students.reduce((prev, curr)=>prev + curr.score, 0);
    console.log(result / students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  // 학생들의 모든 점수를 문자열로 변환 => map,join
  {
    const result = students
    .map((student)=>student.score)
    // 점수가 50점 이상인 학생 구하기
    .filter((score)=> score>= 50)
    .join();
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  // 학생들의 점수를 정렬해서 가장 낮은 점수가 먼저 출력되게 만들기
  {
    const result = students
    .map(student=>student.score)
    .sort((a,b)=>a-b)
    .join();
    console.log(result);
  }
  // 학생들의 점수를 정렬해서 가장 높은 점수가 먼저 출력되게 만들기
  {
    const result = students
    .map(student=>student.score)
    .sort((a,b)=>b-a)
    .join();
    console.log(result);
  }