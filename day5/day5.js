function fractionToDecimal(intN, intD) {
    var pos,
        str='',
        arr = [],
        obj = myDiv(intN, intD);
    //check whether the quotient is negative - this check is required when the quotient is 0
    if ((intN < 0) === (intD < 0)){
        str = '' + obj.q;
    } else {
        str = '-' + Math.abs(obj.q);
    }
    
    if (obj.r !==0){
        str+='.';   //add decimal point

        //get the numbers after dicimal point
        do {
            arr.push(obj.r);    //save the remainder

            obj = myDiv(obj.r * 10, intD);
            str+=Math.abs(obj.q); //add quotient into the string; always save the non-negative number.
            if (arr.indexOf(obj.r)>-1){ //the result is repeating when same remainder is found
                break;
            }
        }while(obj.r!==0);
        
        if (obj.r!==0){
            //insert ( before the index position
            pos = str.indexOf('.')+arr.indexOf(obj.r) + 1;    
            str = str.substring(0, pos) + '(' + str.substring(pos);
            //add ) to the end
            str+=')';
        }
        
        return str;
    }
    return str;
}

//return obj of quotient and remainder
function myDiv(intN, intD) {

    var obj = {};
    obj.q = intN/intD < 0?Math.ceil(intN/intD):Math.floor(intN/intD);
    obj.r = intN % intD;
    return obj;
}