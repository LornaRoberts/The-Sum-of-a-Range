const sum = function(start, end, step = 2){
    const array = [];
   for (let i=start; i< end + 1; i+=step){
    array.push(i)
  }
  console.log(array);

    let total = 0;
    for (let i = 0; i < array.length; i++){
        total += array[i];
    }
    console.log(total);
}

sum(2, 20)