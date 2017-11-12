function rot13(str) { // LBH QVQ VG!
  // 请把你的代码写在这里
  var arr = str.split(' ');
  var newArr = arr.map(function (e) {
    return e.split('').map(function (e) {
      if (e.charCodeAt() >= 65 && e.charCodeAt() <= 90) {
        if (e.charCodeAt() < 78) {
          return String.fromCharCode(e.charCodeAt() + 13);
        } else {
          return String.fromCharCode(e.charCodeAt() - 13);
        }
      } else {
        return e;
      }
    }).join('');
  });
  return newArr.join(' ');
}

console.log(rot13("SERR PBQR PNZC?")); // 你可以修改这一行来测试你的代码