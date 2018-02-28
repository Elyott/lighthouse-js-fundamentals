function loopyLighthouse(range, multiples, words){
  var multiplesA = multiples[0];
  var multiplesB = multiples[1];
  for(var i = range[0]; i <= range[1]; i++){
    if(i % multiplesA === 0 && i % multiplesB === 0){
      console.log(words[0] + words[1]);
    }else if(i % multiplesA === 0){
      console.log(words[0]);
    }else if(i % multiplesB === 0){
      console.log(words[1]);
    }else{
      console.log(i);
    }
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);