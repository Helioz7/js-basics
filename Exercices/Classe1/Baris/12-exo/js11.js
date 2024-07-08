function fizzBuzz(){
    for (let i = 1; i<= 100;i++){
        if(1 % 15 === 0){
            console.log("FizzBuzz");
        }else if ( 1 % 3 ===0){
            console.log('Fizz');
        }else if (i % 5 === 0){
            console.log("buzz");
        }else{
            console.log(i);
        }
    }
}