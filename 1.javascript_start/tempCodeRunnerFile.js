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
  // 학생의 점수가 90점인 학생 찾기 =>find
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
  