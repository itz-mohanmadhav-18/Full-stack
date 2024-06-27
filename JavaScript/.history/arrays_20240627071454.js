let numsArray = [];
while(true){
  let i = prompt();
  if( i === null){
    break;
  }
  numsArray.push(i);
}
numsArray.sort((a,b) => b-a);
for(let x = 0 ; x<numsArray.length ; x++){
  document.write(`<p>${numsArray[x]*numsArray[x]}</p>`);
}