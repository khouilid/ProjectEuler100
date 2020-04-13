function SumSquareDifference (Num) {
    let Arry = [...Array(Num + 1).keys()];
    let SquareNumbers =  [];
    for (let i = 1; i < Arry.length; i++){
        SquareNumbers.push(i * i);
    }
    let SquareSum = SquareNumbers.reduce((A , B) => {return A + B});
    let sum = Arry.reduce((a, b) => {return a + b});
    console.log((sum * sum) - SquareSum);
}
SumSquareDifference(100);
