const array=[2,3,5,6]

function oddSum(array) {
    let sum = 0;
   for (let index = 0; index < array.length; index++) {
 if (array[index]%2==1) {
      sum=sum+array[index];
      console.log(sum);
 }
   
}}

console.log( oddSum(array));

