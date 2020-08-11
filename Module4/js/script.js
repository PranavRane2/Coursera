

(function (window){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (x in names) {

  if (names[x].charAt(0) === 'j' || names[x].charAt(0) === 'J') {
    byeSpeaker.speak(names[x]);
  } else {
    helloSpeaker.speak(names[x]);
  }
}
})(window);