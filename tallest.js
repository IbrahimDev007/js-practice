function tallestFriend ( height ) {
     let temp=0;
     let lep=0;
    for (let index = 0; index < height.length; index++) {
          temp=height[index];
          lep=height[index+1];
          if (temp >height[index+1]) {
             temp = height[index];
          }
        
     }
  return temp;

    }


console.log(tallestFriend ([10,33,5,99,6,66,45,89,100]));

