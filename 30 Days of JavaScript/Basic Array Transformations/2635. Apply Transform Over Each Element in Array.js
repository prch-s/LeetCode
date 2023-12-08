const map = (arr, fn) => {
    return arr.map(fn)
}

console.log(
    map(
        (arr = [1, 2, 3]),
        (fn = function plusone(n) {
            return n + 1
        })
    )
)
// [2,3,4]

console.log(
    map(
        (arr = [1, 2, 3]),
        (fn = function plusI(n, i) {
            return n + i
        })
    )
)
// [1,3,5]

console.log(
    map(
        (arr = [10, 20, 30]),
        (fn = function constant() {
            return 42
        })
    )
)
// [42,42,42]
