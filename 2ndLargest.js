const numbers= [10,33,5,99,6];
function secondLargest ( numbers ) {
    //Write your code here
      for (let index = 0; index < numbers.length; index++) {
       
       if (numbers[index]>numbers[index+1]) {
         let  temp = numbers[index];
       
       }
       else
       {
       var  temp2nd=numbers[index+1]
       }
       if (index < numbers.length) {
        console.log(temp2nd);
        return  temp2nd;
       }
       
      }
    //Don't forget to return
    
    }
    secondLargest ( numbers );
