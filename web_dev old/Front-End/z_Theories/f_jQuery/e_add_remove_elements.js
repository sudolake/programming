$("h1").before("<button>im a button </button>"); // adds a button before "h1" tag
$("h1").after("<button>im a button </button>"); // adds a button after "h1" tag

$("h1").prepend("<button>im a button </button>"); // adds a button inside the "h1" tag before the content, ex.: <h1> <button>smthng</button> A title </h1>
$("h1").append("<button>im a button </button>"); // adds a button inside the "h1" tag after the content, ex.: <h1> A title <button>smthng</button> </h1>

// remove

$("button").remove(); // removes all buttons
