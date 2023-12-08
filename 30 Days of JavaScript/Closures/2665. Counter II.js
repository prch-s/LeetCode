var createCounter = function (init) {
    let n = init
    return {
        increment: () => {
            return (n += 1)
        },
        reset: () => {
            n = init
            return init
        },
        decrement: () => {
            return (n -= 1)
        },
    }
}

const counter = createCounter(5)

console.log(counter.increment()) // 6
console.log(counter.increment())
console.log(counter.reset()) // 5
console.log(counter.decrement()) // 4
