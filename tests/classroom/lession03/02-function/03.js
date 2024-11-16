arr = [1,2,5,9];
console.log(arrSum(arr));
function arrSum() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum = sum + arr[i];
    return sum;
}