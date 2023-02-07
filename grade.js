function findGrade(marks){
    //write your code here
      
    //don't forget to write return
    if (marks>=80) {
         return 'A'
    }else if(marks>=60){
     return "B"
    }
    else if(marks>=50){
    return "C"
    }
    else if(marks>=40)
    {
        return "D"
    }
    else{
        return "F"
    }
    }

    console.log(findGrade(95));