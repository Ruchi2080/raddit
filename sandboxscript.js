const INDEX_OF_LONGITUDE = 0;
const INDEX_OF_LATITUDE = 1;
const myName = "Ruchi"
var numbers =[0,1,2,3,4,5,6,7,8,9];

function counttoTen() { 
 numbers.map (x => mapNumber(x));
}

function printNumber(number) {
    console.log(number);
}

function mapNumber (number) {
    number = number * 10;
    console.log(number);
    return number;
}
