function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	let halfArrayLength = parseInt(arr.length / 2);
	let leftHalfArray = arr.slice(0, halfArrayLength);
	let rightHalfArray = arr.slice(halfArrayLength, arr.length);

	let sortedLeftHalfArray = mergeSort(leftHalfArray);
	let sortedRightHalfArray = mergeSort(rightHalfArray);

	let mergedArr = merge(sortedLeftHalfArray, sortedRightHalfArray);

	return mergedArr;
}

function merge(leftArr, rightArr) {
	let mergedArr = [];
	let leftArrIndex = 0;
	let rightArrIndex = 0;

	while (leftArrIndex < leftArr.length && rightArrIndex < rightArr.length) {
		if (leftArr[leftArrIndex] <= rightArr[rightArrIndex]) {
			mergedArr.push(leftArr[leftArrIndex]);
			leftArrIndex++;
		} else {
			mergedArr.push(rightArr[rightArrIndex]);
			rightArrIndex++;
		}
	}
	while (leftArrIndex < leftArr.length) {
		mergedArr.push(leftArr[leftArrIndex]);
		leftArrIndex++;
	}
	while (rightArrIndex < rightArr.length) {
		mergedArr.push(rightArr[rightArrIndex]);
		rightArrIndex++;
	}
	return mergedArr;
}

export { mergeSort };
//write a mergeSort function which takes an array as an input
//if array's length is equal to or smaller than 1 it should return the arr
//then apply merge Sort algorithm which is
// sort the left half
// sort the right half
//merge both together
