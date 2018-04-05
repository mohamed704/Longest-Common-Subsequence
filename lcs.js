var combinations = function (string)
{
    var result = [];

    var loop = function (start,depth,prefix)
    {
        for(var i=start; i<string.length; i++)
        {
            var next = prefix+string[i];
            if (depth > 0)
                loop(i+1,depth-1,next);
            else
                result.push(next);
        }
    }

    for(var i=0; i<string.length; i++)
    {
        loop(0,i,'');
    }

    return result;
}

const LSC = (str1, str2) => {
  let ch1 = combinations(str1);
  let ch2 = combinations(str2);
  let max="";
  let lMax=0;
  for(var i=0;i<ch1.length;i++){
    for(var j=0;j<ch2.length;j++){
      if(ch1[i] == ch2[j] && ch1.length>lMax){
        max=ch1[i]
      }
    }
  }
  return max;
}
console.log(LSC("132535365", "123456789" ));