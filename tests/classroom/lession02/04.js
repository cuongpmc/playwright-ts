const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Input height (cm): ", (input) => {
        let height = parseInt(input);
        if (isNaN(height) || height <= 0) {
            console.log("Please enter a valid height!");
            rl.close();
            return;
        }
        else{
            let idealWeight = ((height%100)*9) / 10;
            let maxWeight = height%100;
            let minWeight = ((height%100)*8) / 10;
            console.log(
                "Ideal weight: "+idealWeight+" kg"
                +"\n"+
                "Max weight: "+maxWeight+" kg"
                +"\n"+ 
                "Min weight: "+minWeight+" kg"
            );
            rl.close();
        }
    }
);