
var maleMarriageEligibility = function(gender,age,boyName){

    var res = gender == "Male" && age >= 21 
    ? `Hey ${boyName} you are eligible for marriage.` 
    : `Hey ${boyName} you are not eligible for marriage.`;
    console.log(res);
}
maleMarriageEligibility("Male",25,"Bill Gates");
maleMarriageEligibility("Male",17,"Steve Jobs");

var femaleMarriageEligibility = function(gender,age,girlname){

    var res = gender == "Female" && age >= 18
    ? `Hey ${girlname} you are eligible for marriage.`
    : `Hey ${girlname} you are not eligible for marriage.`;
    console.log(res);
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malidra Gates");