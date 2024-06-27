// ===============================================================
// printing numbers after storing them in array in descending order 
// ===============================================================
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
// --------------------------------------------------------------------
// printing numbers after storing them in array in ascending order 
// =====================================================================
let numsArray = [];
while(true){
  let i = prompt();
  if( i === null){
    break;
  }
  numsArray.push(i);
}
numsArray.sort((a,b) => a-b);
for(let x = 0 ; x<numsArray.length ; x++){
  document.write(`<p>${numsArray[x]*numsArray[x]}</p>`);
}