function bubble(arr) {
    let swapped
    do {
        swapped = false
        for (i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
    return arr
}

function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentvalue = arr[i]
        let j = i - 1
        while (j >= 0 && currentvalue < arr[j]) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = currentvalue
    }
    return arr
}

function quick(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quick(left), pivot, ...quick(right)]
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let sorted = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sorted.push(left.shift())
        }
        else {
            sorted.push(right.shift())
        }
    }
    return [...sorted, ...left, ...right]
}

function selection(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr
}

let arr = [20, 8, -2, 4, -6, 3]
console.log(bubble(arr));
console.log(insertion(arr));
console.log(quick(arr));
console.log(mergeSort(arr));
console.log(selection(arr));