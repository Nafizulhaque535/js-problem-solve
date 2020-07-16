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
