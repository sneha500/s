//Q11) Write code to find average as mentioned above. Use array and object methods.

const studentsInput = [
    { student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } }
  ];
  
  const studentsOutput = studentsInput.map(student => {
    let studentName = Object.keys(student)[0];
    let subjects = Object.values(student)[0];
    let scores = Object.values(subjects);
    let average = scores.reduce((acc, score) => acc + score, 0) / scores.length;
  
    return { [studentName]: { average: average } };
  });
  
  console.log(studentsOutput);