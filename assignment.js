//feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var convert = feetToMile(1000);
console.log(convert);



//woodCalculator
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;

    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
var woodResult = woodCalculator(10, 15, 20);
console.log(woodResult);


//brickCalculator
function brickCalculator(z){
    let result;
    if(0 < a <= 10){
        reseult = a * 15 * 1000;
    }
    else if(10 < a <=20){
        var second = (a - 10) * 12 * 1000;
        result = 15000 + second;
    }
    else{
        result = 27000 + (a - 20) * 10 * 1000
    }
    return result;
}


//tinyFriend
function tinyFriend(names){
    var youngest = names[0];

    for(var i = 0; i < names.length; i++){
        var currentName = names[i];

        if(currentName < youngest){
            youngest = currentName;
        }
    }
    return youngest;
}
var youngestName = tinyFriend(["Messi", "Ronaldo" , "Kaka", "Nafiz"]);
console.log(youngestName);
