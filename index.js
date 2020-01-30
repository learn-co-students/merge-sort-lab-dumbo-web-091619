
function findMinAndRemoveSorted(arr){
    let min = arr[0]
    let minIndex = 0
    for (let i=0; i<arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
            minIndex = i
        }
    }
    arr.splice(minIndex, 1)
    return min
}

function merge(arr1, arr2){
    let mergedArray = []
    while (!!arr1.length && !!arr2.length){
        if (arr1[0] < arr2[0]){
            mergedArray.push(findMinAndRemoveSorted(arr1))
        } else {
            mergedArray.push(findMinAndRemoveSorted(arr2))
        }
    }
    return mergedArray.concat(arr1).concat(arr2)
}

function mergeSort(arr){
    let middle = arr.length/2
    let arr1 = arr.slice(0, middle)
    let arr2 = arr.slice(middle, arr.length)
    let sortedArray

    if (arr.length < 2){
        return arr
    } else {
        sortedArray = merge(mergeSort(arr1), mergeSort(arr2))
    }
    return sortedArray
}
