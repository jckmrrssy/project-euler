let fibonacci = [1, 2]
let highFib = 2

while (highFib < 4000000) {
    const getNextFibNum = fibArr => {
        let nextFibNum = fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]
        fibonacci.push(nextFibNum)
        highFib = nextFibNum
    }
    getNextFibNum(fibonacci)
}

fibonacci = fibonacci.filter(val => val < 4000000)
                            .filter(val => (val % 2) === 0)
                                    .reduce((total, val) => total += val)


console.log(fibonacci)