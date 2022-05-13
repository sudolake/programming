// 1. way

$(document).keydown(function (event) {
  //
  console.log(even.key);
});

//  2. way

$(document).on("keydown", function (event) {
  // better
  console.log(even.key);
});
