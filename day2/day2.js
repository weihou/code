function largestNumber(arr){
	var str = '';
    arr.sort(function(a, b){
        return parseInt(''+b+a) - parseInt(''+a+b);
    });
    str = arr.join('');
    if (str.indexOf('0')===0){
    	str ='0';
    }
    return str;
}