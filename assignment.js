//feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var convert = feetToMile(1000);
console.log(convert);