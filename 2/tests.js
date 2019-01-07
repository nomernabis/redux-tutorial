
const addCounter = (list) => {
    return [...list, 0]
}

const removeCounter = (list, index) => {
    return [...list.slice(0, index), ...list.slice(index + 1)]
} 

const changeCounter = (list, index, value) => {
    return [...list.slice(0, index), list[index] + value, ...list.slice(index+1)]
}

const testAddCounter = () => {
    const listBefore = []
    const listAfter = [0]

    deepFreeze(listBefore)
    expect(
        addCounter(listBefore)
    ).toEqual(listAfter)
}

const testRemoveCounter = () => {
    const listBefore = [0, 1, 2, 5, 10]
    const indexToRemove = 2
    const listAfter = [0, 1, 5, 10]

    deepFreeze(listBefore)
    expect(
        removeCounter(listBefore, indexToRemove)
    ).toEqual(listAfter)
}

const testChangeCounter = () => {
    const listBefore = [0, 5, 1]
    const index = 1
    const value = -1
    const listAfter = [0, 4, 1]

    deepFreeze(listBefore)

    expect(
        changeCounter(listBefore, index, value)
    ).toEqual(listAfter)
}

testAddCounter()
testRemoveCounter()
testChangeCounter()


console.log('Tests passed')