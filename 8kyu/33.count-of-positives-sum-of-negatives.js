function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
        return []
    } else {
        let countPositives = input.reduce((sum, n) => sum + (n > 0 ? 1 : 0), 0)
        let sumNegatives = input.reduce((sum, n) => sum + (n < 0 ? n : 0), 0)
        return [countPositives, sumNegatives]
    }
}