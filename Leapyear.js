let arrOfYears=[2023,2024,2025,2028,2030]
function findLeapYear(arrOfYears){
    //write your code here
  let leapYEar=[];
  for (let index = 0; index < arrOfYears.length; index++) {
   
    if (arrOfYears[index]%4 =='0'){
        leapYEar.push(arrOfYears[index])
    }
    
  }
   return leapYEar;
    //don't forget to write return
    }

    console.log(findLeapYear(arrOfYears));