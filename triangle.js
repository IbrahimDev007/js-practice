function checkTriangle (side1, side2, side3){
    //write your code here
     if (side1==side2 && side2 == side3 && side3 == side1) {
        return "No"
     } else {
       return "Yes"
     }
      
    //don't forget to write return
    }

    console.log(checkTriangle(2,2,2));