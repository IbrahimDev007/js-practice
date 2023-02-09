
function secondLargest ( numbers ) {
    //Write your code here

    let temp= numbers.sort();
    ////
       
      
    //Don't forget to return
return temp[numbers.length-2];
    }
    const numbers= [10,33,5,99,6,66,45,89,100];
   console.log(secondLargest ( numbers ));
