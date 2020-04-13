function IsPalindrome(x) {
    let Number = x.toString().split("");
    if (Number.join() === Number.reverse().join()){
        return true;
    }
    return false;
}
function LargestPalindromeProduct () {
    let theNumbers = [];
    for (let i = 999; i > 99; i--){
        for (let y = 999; y > 99; y--){
            let Num = i * y;
            if(IsPalindrome(Num)){
                theNumbers.push(i);
                theNumbers.push(y);
                theNumbers.push(Num);
                break;
            }
        
        }
    }
    console.log(theNumbers[0] +  " * " + theNumbers[1] + " = " + theNumbers[2]);
}

LargestPalindromeProduct();
