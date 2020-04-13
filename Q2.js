function phoneNumberCheck(number){
    return /^\(?(^(09|9)[012][1-9]\d{7}$)|(^(09|9)[3][123456789]\d{7}$)/.test(number);
  }