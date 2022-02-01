/*let number1 = prompt("Enter the number 1:");*/

function calculate(){
  console.log("Calculator funtion");
  let num1=Number(prompt("Enter the 1st number: "));
  console.log(num1);
  let num2=Number(prompt("Enter the 2nd number:"));
  console.log(num2);
  let sum,subs,mult,div;
  sum=num1+num2;
  console.log(sum);
  subs=num1-num2;
  console.log(subs);
  mult=num1*num2;
  console.log(mult);
  (div=num1/num2);
  console.log(div);
  document.getElementById("results").innerHTML=`
    <p>${num1} + ${num2} = ${sum}</p>
    <p>${num1} - ${num2} = ${subs}</p>
    <p>${num1} * ${num2} = ${mult}</p>
    <p>${num1} / ${num2} = ${div}</p>
  `;


  //dispay the sum
  //display the subs
  //display the mult
  //display the div
  //console.log("The sum =" + num1 + num2 );
}