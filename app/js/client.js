var Note = require('./notes/models/note');
var Harrypotter = require('./notes/models/harryPotter');

var note = new Note();
var harryPotter = new Harrypotter();

harryPotter.set('hogwarts', 'The boy wizard');
console.log(harryPotter.get('hogwarts'));

if(harryPotter.has('hogwarts')) {
  alert("He studies at hogwarts!");
}

note.set('noteBody', 'Wow such note, so words');
note.set('dumbledoor', 'oldest wizard');

console.log(note.get('noteBody'));
console.log(note.get('dumbledoor'));
console.log(note);

note.save({}, {
  success: function(res) {
    console.log('success!');
    console.log(res);
  },
  error: function(err) {
    console.log('error');
    consol.log(err);
  }
});
