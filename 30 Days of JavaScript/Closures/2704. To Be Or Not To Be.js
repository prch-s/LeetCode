var expect = function (val) {
    return {
        toBe: function (expected) {
            if (val === expected) {
                return true
            }
            throw "Not Equal"
        },
        notToBe: function (expected) {
            if (val !== expected) {
                return true
            }
            throw "Equal"
        },
    }
}

try {
    console.log(expect(5).toBe(5))
} catch (error) {
    console.log(error)
}

try {
    console.log(expect(5).notToBe(5))
} catch (error) {
    console.log(error)
}
