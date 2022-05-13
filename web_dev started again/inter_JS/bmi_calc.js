function bmi_calc(){
    var weight = prompt("how much do you weight?: ");
    var height = prompt("how tall are you?: ");
    height = height / 100;
    var BMI = weight/(height*height);
    if(BMI <= 18.5){
        alert("your BMI is "+ Math.round(BMI) +" = underweight")
    }
    if(BMI > 18.5 && BMI <= 24.9){
        alert("your BMI is "+ Math.round(BMI) +" = normal")
    }
    if(BMI > 25 && BMI <= 29.9){
        alert("your BMI is "+ Math.round(BMI) +" = overweight")
    }
    if(BMI > 30){
        alert("your BMI is "+ Math.round(BMI) +" = obese / extremely obese")
    }
    }
    bmi_calc()