function factorial(num){
    let fact = 1;
    for (let index = 1; index < num; index++) {

        fact = fact *index;
    }

    return fact;
}

console.log(factorial(7));