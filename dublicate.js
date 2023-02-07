function duplicat(arr) {
 let  real=[]
 for (let index = 0; index < arr.length; index++) {
     const num=arr[index]
    if (real.includes(num)!== true) {
        real.push(num)
    }
    
 }
    return real;

}
 // try empty erray to check number is includes then push
console.log(duplicat([10,9,3,5,3,9,10,7,5]));
