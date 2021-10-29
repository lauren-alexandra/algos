def binarySearch(arr, target):
	l, r = 0, len(arr) - 1
	while l + 1 < r: 
		mid = (l + r)
		if arr[mid] == target: return mid
		if arr[mid] < target: l = mid + 1
		else: r = mid - 1
	if arr[l] == target: return l
	if arr[r] == target: return r
	return -1 
    