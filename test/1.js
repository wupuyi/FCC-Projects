function sumFibs(num) {
    var newArr = [];
    var arr = [1, 1];
    var temp,
        result;
    if (num <= 1) {
        result = 1;
    } else {
        newArr = [].concat(arr);
        while (arr[1] < num) {
            temp = arr.reduce(function (a, b) {
                return a + b;
            });
            newArr.push(temp);
            arr.shift();
            arr.push(temp);
        }
        console.log(newArr);
        newArr = newArr.filter(function (e) {
            return e % 2 !== 0 && e <= num;
        });
        console.log(newArr);
        result = newArr.reduce(function (a, b) {
            return a + b;
        });
    }
    console.log(result);
    return result;
}
// sumFibs(1);

sumFibs(75025);
sumFibs(75024);