(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {

    var firstLetter = names[i].charAt(0).toLowerCase();
    var message = "";

    if (firstLetter === 'j') {
      message = "Goodbye " + names[i];
    } else {
      message = "Hello " + names[i];
    }

    document.body.innerHTML += "<p>" + message + "</p>";
  }
})();
