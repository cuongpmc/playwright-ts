const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Input temperature value: ", (inputTemp) => {
    let temp = parseInt(inputTemp);
    rl.question("Input current temperature type: ", (inputCurrentType) =>{
        rl.question("Input convert temperature type to: ", (inputConvertType) =>{
            console.log(convertTemp(temp,inputCurrentType,inputConvertType));
            rl.close();
        });
    });
});
function convertTemp(temp,typeCurrent,typeConvert) {
    let convertTemp;
    if (typeCurrent === typeConvert)
        return "No need to convert";
    else if (typeCurrent === "C" && typeConvert === "F") {
        //convert C to F
        convertTemp = (temp * 9) / 5 + 32;
        return `Convert: ${temp} o${typeCurrent} = ${convertTemp} o${typeConvert}`;
    }else if (typeCurrent === "F" && typeConvert === "C") {
        //convert F to C
        convertTemp = ((temp - 32) * 5) / 9;
        return `Convert: ${temp} o${typeCurrent} = ${convertTemp} o${typeConvert}`;
    }
}