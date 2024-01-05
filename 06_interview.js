function tcsEligibility(gradScore,hscScore,sscScore,candidateName){

    if(gradScore >= 70 || hscScore >= 80 || sscScore >= 90){
        console.log(`Congrates "${candidateName}" you are eligible for TCS interview`);
    }
    else{
        console.log(`Unfortunately "${candidateName}" you are not eligible for interview`);
    }
}

tcsEligibility(80,86,90,"tushar imade");
tcsEligibility(70,65,55,"roman ratan");
tcsEligibility(60,79,88,"bobby patil")