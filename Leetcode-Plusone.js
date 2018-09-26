var plusOne = function(digits) {
     var current;
    var size = digits.length-1;
    var carry= 1;
  
    for(let i=size;i>=0;i--){
          if(carry>0){
            current= digits[i];
            digits[i]= (digits[i]+carry)%10;
            carry=Math.floor((current+carry)/10);
          }else{
            digits[i]= (digits[i]+carry)%10;
            carry=Math.floor((digits[i]+carry)/10);
            }
}
    if(carry>0){
      digits.unshift(1);
    }
    return digits;
}