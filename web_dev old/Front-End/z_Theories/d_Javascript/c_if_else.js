var num = 5;

if (num == 5) {
  console.log("nice");
} else if (num === 2) {
  console.log("something");
} else {
  console.log("not nice");
}

//  == - equals
//  != - does not equal
//  && - and
//  || - or
// Javascript is fucking dumb //
var number = 9;
if (7 < 9 < 8) {
  // Javascript sees 7 < 9 = True so it proceeds, it doesent care about 9 < 8
  console.log("hi"); // so make it like if (7 < 9 && 9 < 8)
}
