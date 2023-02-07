function JimOrDelaOrChinku ( marksOfJim, marksOfDela, marksOfChinku ) {
    //Write your code here
      if ( marksOfJim > marksOfDela && marksOfDela >  marksOfChinku)
      {
        return "Jim"
    }
      else if( marksOfJim < marksOfDela && marksOfDela >  marksOfChinku)
      {
        return "Dela"
      }
    
      else if ( marksOfJim < marksOfDela && marksOfDela <  marksOfChinku) {
        return "Chinku"
    }
    }

    console.log( JimOrDelaOrChinku(84,99,77));