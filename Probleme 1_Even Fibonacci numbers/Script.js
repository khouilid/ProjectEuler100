let the_fiboList = [1, 2];
for ( let i = 0 ; i < the_fiboList.length; i++){
    let sum = the_fiboList[i] + the_fiboList[i + 1];
    if(sum < 4000000){
        the_fiboList.push(sum);
    }
}
function FiboSum (){
    let theSum = 0;
    for (let y = 0 ; y < the_fiboList.length ; y++){
        if(the_fiboList[y] % 2 == 0){
            theSum += the_fiboList[y];
        }
    }
    console.log(theSum);
}
FiboSum();