function binarySearch ( array, item ) {
    let low = 0
    let high = array.length - 1
    while (low <= high) {
        let mid = low + high
        let guess = array[mid]
        if (guess === item) return mid
        if (guess > item) {
            high = mid - 1
        }else{
            low = mid + 1
        }
    }
}

const arr = [1,2,3,4,5,6,7,8,9]
console.log(binarySearch(arr, 3))