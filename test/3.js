// var Person = function (firstAndLast) {

//     var nameArr = firstAndLast.split(' ');

//     this.getFirstName = function () {
//         return nameArr[0];
//     };

//     this.getLastName = function () {
//         return nameArr[1];
//     };

//     this.getFullName = function () {
//         return nameArr.join(' ');
//     };

//     this.setFirstName = function (first) {
//         nameArr[0] = first;
//     };

//     this.setLastName = function (last) {
//         nameArr[1] = last;
//     };

//     this.setFullName = function (firstAndLast) {
//         nameArr = firstAndlast.split(' ');
//     };

//     // return firstAndLast;
// };

// var bob = new Person('Bob Ross');
// bob.getFullName();


function pairwise(arr, arg) {

    var newArr = [];
    newArr.push(arr);
    newArr.push(arr);

    var result = [];

    for (var i = 0; i < newArr[0].length; i++) {
        for (var j = 0; j < newArr[1].length; j++) {

            if ((newArr[0][i] + newArr[1][j]) === arg) {
                result.push(i);
                result.push(j);
            }

        }
    }


    console.log(result);

    result = result.filter(function(e, i, arr) {
        return arr.indexOf(e) === i; 
    });

console.log(result);
    return result.reduce(function (pre, next) {

            return pre + next;


    });


}

pairwise([1, 4, 2, 3, 0, 5], 7);
pairwise([1, 3, 2, 4], 4);