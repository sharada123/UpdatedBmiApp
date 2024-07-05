function calBMI(){
    age=parseInt(document.getElementById('age').value);
    weight=parseInt(document.getElementById('weight').value);
    height=parseInt(document.getElementById('height').value);
        var square_of_height=Math.pow(height,2)/10000;
        let bmi=(weight/square_of_height).toFixed(2);
        var msg="Your BMI is = ";
   

    if (age >= 2 && age <= 5) {
        
        if (bmi < 15) document.getElementById('result').innerHTML=msg+bmi+"(Underweight)";
        else if (bmi >= 15 && bmi <= 18)  document.getElementById('result').innerHTML=msg+bmi+"(Normal weight)";
        else if (bmi > 18)  document.getElementById('result').innerHTML=msg+bmi+"(Over Weight)";
    } else if (age >= 6 && age <= 10) {
        // Adjust these ranges based on CDC or other relevant guidelines
        if (bmi < 14)  document.getElementById('result').innerHTML=msg+bmi+"(Underweight)";
        else if (bmi >= 14 && bmi <= 19) document.getElementById('result').innerHTML=msg+bmi+"(Normal Weight)";
        else if (bmi > 19)  document.getElementById('result').innerHTML=msg+bmi+"(Overweight)";
    } else if (age >= 11 && age <= 20) {
        // Adjust these ranges based on CDC or other relevant guidelines
        if (bmi < 13)  document.getElementById('result').innerHTML=msg+bmi+"(Underweight)";
        else if (bmi >= 13 && bmi <= 24)  document.getElementById('result').innerHTML=msg+bmi+"(Normal weight)";
        else if (bmi > 24)  document.getElementById('result').innerHTML=msg+bmi+"(overweight)";
    } else {
    
     if(age>=20 && age<100){
        if(bmi<16){
            document.getElementById('result').innerHTML=msg+bmi+"(Severe Thinness)";
    
        }
        else if(bmi>=16 && bmi<=17){
            document.getElementById('result').innerHTML=msg+bmi+"(Moderate Thinness)";
        }
        else if(bmi>17 && bmi<18.5){
            document.getElementById('result').innerHTML=msg+bmi+"(Mild Thinness)";
    
        }
        else if(bmi>=18.5 && bmi<=25){
            document.getElementById('result').innerHTML=msg+bmi+"(Normal)";
        }
        else if(bmi>25 && bmi<=30){
            document.getElementById('result').innerHTML=msg+bmi+"(Overweight)";
        }
        else if(bmi>30 && bmi<=35){
            document.getElementById('result').innerHTML=msg+bmi+"(Obese case I)";
        }
        else if(bmi>35 && bmi<=40){
            document.getElementById('result').innerHTML=msg+bmi+"(Obese case II)";
        }
        else{
            document.getElementById('result').innerHTML=msg+bmi+"(Obese III)";
        }
    }
}
}
/*var radioButtons = document.getElementsByName('option');
radioButtons.forEach(function(radio) {
    radio.addEventListener('click', function() {
        if (radio.checked) {
            console.log(radio.value); 
        }
    });
});
switch(radio.value){
    case "Standard":
        {

        }
}*/