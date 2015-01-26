function op (strNum1, strNum2, strOp) {
	var int1, int2;
	if (!isNaN(strNum1) && !isNaN(strNum2) && isNaN(strOp)) {
		int1 = parseInt(strNum1);
		int2 = parseInt(strNum2);
		if (strOp === '+') {
			return int1 + int2 + '';
		} else if (strOp === '-') {
			return int1 - int2 + '';
		} else if (strOp === '*') {
			return int1 * int2 + '';
		} else if (strOp === '/') {
			return int1 / int2 + '';
		} else {
			return NaN;
		}
	} else {
		return NaN;
	}
}

function ReversePolishNotation (arr) {
	var pointer = 2;
	if (!arr || !arr.length){
		return NaN;
	}
	while (arr && arr.length > 2 && pointer < arr.length) {
		//if find an operator
		if (isNaN(arr[pointer])) {
			//calculate the operation with 2 numbers before the operator, 
			//then replace these 3 items in the array with their result.
			arr.splice(pointer-2,3, op(arr[pointer-2],arr[pointer-1],arr[pointer]));
			//point to the item after the new result
			pointer = pointer - 1;
		} else {
			pointer ++;
		}
	}

	if (arr.length ===1){
		return arr[0];
	}else {
		return NaN;
	}
}

