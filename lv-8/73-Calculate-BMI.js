// Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    const resultBMI = weight / Math.pow(height,2);
    return resultBMI <=18.5 ? "Underweight" : resultBMI <=25.0 ? "Normal" : resultBMI <= 30.0 ? "Overweight" : "Obese" ; 
}