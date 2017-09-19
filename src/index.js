module.exports = function zeros(expression) { 
//отсеиваем отделные выражения в каждой массий
    var inp = String(expression).split(/\*/g);
    var one = [];   //!
    var two = [];   //!!
    for(var i = 0; i < inp.length; i++){
      if(inp[i].indexOf("!!") >= 0){
        two.push(inp[i].replace("!!",''));
        inp[i] = 0;
      }
    }
    for(var j = 0; j < inp.length; j++){
      if(inp[j] != 0){
        one.push(inp[j].replace("!",''));
        inp[j] = 0;
      }
    }
    console.log(one);
    console.log(two);
    
//считаем !
    var result = 1;
    for(var i = 0; i < one.length; i++){
      for(var j = one[i]; j > 0; j--){
        result = multiply(result,j);
      }
    }
//считаем !!
    for(var i = 0; i < two.length; i++){
      for(var j = two[i]; j > 0; j-=2){
        result = multiply(result,j);
      }
    }
    var result = String(result).split('').reverse();
    var countZero = 0;
    for(var i = 0; result[i] == "0"; i++){
      countZero++;
    }
    return countZero;
}
function multiply(first,second){
  var fa = first;
  var sa = second;
  if(first < second){
   	fa =second;
  	sa = first
  }
  
  var f = String(fa).split('').reverse();
  var s = String(sa).split('').reverse();
 
  var r = [];
  
  for(var i = 0; i < s.length; i++){
  	var rest = 0;
    var rStepNum = "";
  	for(var j = 0; j < f.length; j++){
    	var value = s[i]*f[j] + rest;
      
      	rest = Math.floor(value / 10);
      	rStepNum += Math.floor(value % 10);
				if(j == f.length-1 && rest > 0){
        rStepNum += rest;
        }
    }
    
    rStepNum = String(rStepNum).split('').reverse();
    for(var k = 0; k < i; k++)
    	rStepNum.push("0");
    var answer = r;

    var ret = 0;
    var rtmp = [];
    for(var v1 = rStepNum.length-1,v2 = answer.length-1;v1 >= 0 || v2 >=0;){
    	var restSum = ret;
      ret = 0;
      if(v1 >= 0){
      	restSum += parseInt(rStepNum[v1]);
        v1--;
      }
      if(v2 >= 0){
      	restSum += parseInt(answer[v2]);
        v2--;
      }
      if(restSum >= 10){
      	ret = 1;
        restSum = Math.floor(restSum % 10);
      }
      rtmp.push(restSum);
      if(v1 < 0 && v2 < 0  && ret !=0){
      rtmp.push(ret);
      }
    }
    r = rtmp.reverse();
  }	
	var result = "";
  for(var t = 0; t < r.length; t++)
  	result += r[t];
  return result;
}

function swap(f,s){
	var tmp = f;
	f = s;
	s = tmp;
}