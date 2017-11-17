function smallestCommons(arr) {

    var newArr = [];

    if (arr[0] > arr[1]) {
        arr.reverse();
    }

    console.log(arr);

    for (var i = arr[0]; i <= arr[1]; i++) {
        newArr.push(i);
    }

    console.log(newArr);

    function sCM(a, b) {
        while (b != 0) {
            var c = a % b;
            a = b;
            b = c;
        }
        return a;
    }

    console.log(sCM(27, 15)); 

    var result = newArr.reduce(function (pre, next) {
        return pre * next / sCM(pre, next);
    });


    return result;
}


smallestCommons([1, 5]);
