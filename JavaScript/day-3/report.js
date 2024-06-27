let reportCard = {};
while(true){
  let studentName = prompt("Student name :");
  if( studentName === null){
    break;
  }
  let marks = +prompt(`${studentName}\'s marks :`); 
  if(marks === null){
    marks = +prompt("please enter marks ");
  }
  reportCard[studentName] = marks;
}
console.log(reportCard);
while(true){
  let displayName = prompt("Student name (jiske marks dekhne h) :");
  if( displayName === null){
    break;
  }
  if(!(displayName in reportCard)){
    document.write('Student data not found <br>');
  }
  else{
    document.write(`<p> Marks for ${displayName} are ${reportCard[displayName]} </p>`);
  }
}

