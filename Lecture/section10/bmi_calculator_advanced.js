function bmiCalculator (weight, height) {
    var bmi = weight / Math.pow(height, 2);
    bmi = Math.round(bmi*10)/10;
    var interpretation = "Your BMI is " + bmi + ", so you ";
    
    if (bmi < 18.5) interpretation += "are underweight.";
    else if (bmi <= 24.9) interpretation += "have a normal weight.";
    else interpretation += "are overweight.";
    
    return interpretation;
}