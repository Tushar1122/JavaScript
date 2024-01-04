
var checkMarriageEligibility = function(gender,age){
    if(gender == "Male" || gender == "Female"){

     if(gender == "Male" && age >= 21 || gender == "Female" && age >= 18){
        console.log(`${gender},${age} eligible for marriage`);
      }
    else{
        console.log(`${gender},${age} not eligible for marriage`);
    }
}
else{
    console.log(`${gender},${age} invalid input`);
}
}
checkMarriageEligibility("Male",17);
checkMarriageEligibility("Male",25);
checkMarriageEligibility("Female",28);
checkMarriageEligibility("Female",16);
checkMarriageEligibility("Other",35);
checkMarriageEligibility("Other",41);