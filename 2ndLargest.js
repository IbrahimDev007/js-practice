
function secondLargest ( numbers ) {
    //Write your code here

    let temp=[];
    let a=0;
    let b=0;
    
      for (let index = 0; index < numbers.length; index++) {
        a=numbers[index];
        b=numbers[index+1];
        a-b>b-a
    ////
       
      }
    //Don't forget to return
return temp;
    }
    const numbers= [10,33,5,99,6,66,45,89,100];
   console.log(secondLargest ( numbers ));
