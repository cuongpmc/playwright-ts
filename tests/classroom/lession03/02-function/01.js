const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Input height (cm): ", (inputHeight) => {
    let height = parseInt(inputHeight);
    if (isNaN(height) || height <= 0) {
        console.log("Please enter a valid height!");
        rl.close();
        return;
    }
    else{
        rl.question("Input weight (kg): ", (inputWeight) =>{
            let weight = parseInt(inputWeight);
            if (isNaN(weight) || weight <= 0) {
                console.log("Please enter a valid weight!");
                rl.close();
                return;
            }
            else{
                console.log(tinhBMI(height, weight));
                rl.close();
            }
        });
    }
});
function tinhBMI(height, weight) {
    let bmi = weight / Math.pow((height/100),2);
    if (bmi < 18.5)
        return `BMI = ${bmi} \n -> Thieu can`;
    else if (bmi < 25)
        return `BMI = ${bmi} \n -> Binh thuong`;
    else if (bmi < 30)
        return `BMI = ${bmi} \n -> Thua can`;
    else 
        return `BMI = ${bmi} \n -> Beo phi`;
}