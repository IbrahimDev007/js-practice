 
//  avrage mark of array;
 
 function  average (arrOfMarks){
    //write your code here
     arrOfMarks=[75.25,65,80,35.45,99.50]
     let array=arrOfMarks;
     let element = 0;
      for (let index = 0; index < array.length; index++) {
       
       element = element+array[index];
        console.log(element);
      }
    let  avg =element/arrOfMarks.length;
   // don't forget to write return
   let Num_average= parseFloat(avg.toFixed(2));
   console.log(typeof(Num_average));
   return Num_average;
   }

console.log( average());


