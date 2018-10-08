function convert(n, b1, b2) {
  var exp = 0;
  var decNum = 0;
  var bNum;
  var neg = false;
  if (n[0] == '-') {
    neg = true;
  }
  for (let i = n.length - 1; i >= (neg ? 1 : 0); i--) {
    bNum = n.charAt(i);
    console.log(bNum);
    if (bNum >= 'a') {
      bNum = bNum.charCodeAt(0) - 87;
    }
    decNum = decNum + bNum * Math.pow(b1, exp);
    exp++;
  }
  console.log('decimal:' + decNum);

  var mod = '';
  var resultarr = '';
  while (decNum != 0) {
    mod = decNum % b2;
    console.log('mod', mod);
    if (b2 > 10 && mod >= 10) {
      mod = String.fromCharCode(87 + +mod);
      console.log(mod);
    }
    resultarr = mod + resultarr;
    decNum = Math.floor(decNum / b2);
  }
  return (neg ? '-' : '') + resultarr;
}

convert('-101', 2, 16);
