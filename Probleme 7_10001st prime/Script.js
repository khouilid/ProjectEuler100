function is_prime(t) {
    var m = Math.floor(Math.sqrt(t));
    for (var i = 2; i <= m; i++) {
        if (t % i == 0) {
            return false;
        }
    }

    return true;
}

function FindThePrime10001() {
    let PrimeArry = [];
    for (let i = 1; i >= 1; i++) {
        if (is_prime(i)) {
            PrimeArry.push(i);
            if (PrimeArry.length == 10002) {
                break;
            }
        }
    }
    console.log(PrimeArry[10001]);
}
FindThePrime10001();