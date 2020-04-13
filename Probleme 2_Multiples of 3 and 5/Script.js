let the_list = [];
for (let i = 1 ; i < 1000 ; i++){
    the_list.push(i);
}
function IsMultiples() {
    let Sum = 0;
    for (let y = 0 ; y <= the_list.length; y++){
        if(the_list[y] % 3 == 0 || the_list[y] % 5 == 0 ){
            Sum += the_list[y];
        }
    }
    console.log(Sum);
};
IsMultiples();
