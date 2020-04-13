function is_prime(t) {
    var m = Math.floor(Math.sqrt(t));
    for (var i = 2; i <= m; i++) {
        if (t % i == 0) {
            return false;
        }
    }

    return true;
}
function Prime(x) {
    let TheBigPrime;
    let theNumber = [...Array(x).keys()];
    for (let i = 2; i < theNumber.length; i++) {
        if (is_prime(i)) {
            TheBigPrime = i;
        }
    }
    console.log(TheBigPrime);
}
Prime(51475143);