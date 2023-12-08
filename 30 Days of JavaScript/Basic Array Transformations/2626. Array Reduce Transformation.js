const reduce = (nums, fn, init) => {
    return nums.reduce(fn, init)
}

console.log(
    reduce(
        (nums = [1, 2, 3, 4]),
        (fn = function sum(accum, curr) {
            return accum + curr
        }),
        (init = 0)
    )
)
// 10

console.log(
    reduce(
        (nums = [1, 2, 3, 4]),
        (fn = function sum(accum, curr) {
            return accum + curr * curr
        }),
        (init = 100)
    )
)
// 130

console.log(
    reduce(
        (nums = []),
        (fn = function sum(accum, curr) {
            return 0
        }),
        (init = 25)
    )
)
// 25
