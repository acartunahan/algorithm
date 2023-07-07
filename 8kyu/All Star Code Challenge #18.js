function strCount(str, letter){  
  
  let sayac = 0;
  for(let i=0;i<str.length;i++){
    if(str[i] == letter){
      sayac++;
    }
  }
  
return sayac;
}
