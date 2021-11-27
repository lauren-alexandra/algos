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
	