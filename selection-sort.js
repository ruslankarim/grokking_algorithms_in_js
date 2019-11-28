function findSmallest(arr){
    let smallest = arr[0]
    let smallestIndex = 0
    for (let i = 1; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i]
            smallestIndex = i
        }
    }
    return smallestIndex
}

function selectionSort(arr){
    let newArr = []
    for(let i = 0; i < arr.length + 1; i ++){
        let smallestIndex = findSmallest(arr)
        newArr.push(arr.splice(smallestIndex, 1)[0])
        i = 0
    }
    return newArr
}

console.log(selectionSort([5,3,6,2,10,21,2354,34,76,234,5]))