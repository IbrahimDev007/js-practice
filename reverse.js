const reverseMaker = (str)=> {
    //Write Your solution Here
    // return a new array of strings
    const arrayStrings = str.split("");
   
    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();
     const joinArray = reverseArray.join("");
    
    // return the reversed string
    return joinArray



  };
  console.log(reverseMaker("i Love You"));

  function totalCost(products) {
    let total = 0;
    const prices = products.map(product => product.price);
    for (let i = 0; i < prices.length; i++) {
      total += prices[i];
    }
    return total;
  }
  
  const shoppingCart = [
    { name: 'product1', price: 10 },
    { name: 'product2', price: 20 },
    { name: 'product3', price: 30 }
  ];
  
  console.log(totalCost(shoppingCart));
  
  

