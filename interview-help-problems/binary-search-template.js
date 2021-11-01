/*
def binary_search(arr, target):
	l, r = 0, len(arr) - 1
	while l + 1 < r: # this handles out of bounds bugs
		mid = (l + r) // 2 
		if arr[mid] == target: return mid

		if arr[mid] < target: l = mid + 1  
		else: r = mid - 1

  # post processing - all mids checked above. just check l and r 
	if arr[l] == target: return l
	if arr[r] == target: return r
	return -1     
*/

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left + 1 < right) {
        let mid = (left + right) / 2;

        if (arr[mid] === target) {
            return mid; // index
        }

        if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    if (arr[left] === target) {
        return left; // index
    }
    else if (arr[right] === target) {
        return right; // index
    }
    else {
        return -1;
    }
};

binarySearch([1, 2, 3, 4, 5], 9);