var timeSecond = 2342335;
var hourse = Math.floor(timeSecond/3600);
console.log("Години:")
console.log(hourse);


var ost = timeSecond%3600;


console.log("Хвилини:")
var y = Math.floor(ost/60);
console.log(y);
console.log("Секунди: ")
var e = (ost%60);
console.log(e);
console.log("Залишок:")
console.log(ost);
console.log(hourse+ ":"+y+ ":"+ e);
