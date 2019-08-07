function fibo(len) {
    var arr = [0, 1];
    for (var i = 2; i < len; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }

    return arr
}