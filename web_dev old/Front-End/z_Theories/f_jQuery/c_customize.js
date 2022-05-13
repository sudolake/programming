$("#example").css("color"); // 1. argument = tells me the property it has (black)
$("#example").css("font-size", "5px"); // 2. arguments = assigns a new property

$("#ex2").addClass("something .mthngelse"); // adds 2 classes
$("#ex2").removeClass("something"); // removes class
$("h1").hasClass("something"); // returns boolean

// text

$("h1").text("Hello"); // like .textContent in vanilla JS
$("h1").html("<em>hi</em>"); // like innerHTML in vanilla JS

// attributes (like "src")

$("#example").attr("href", "www.google.com");
