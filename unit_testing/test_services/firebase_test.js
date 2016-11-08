describe("Testing Firebase", function() {
  // Initialize Firebase (this is FAKED database)
  // Create your own Firebase database and supply it here
  //
  // This sample test assumes that your database is PUBLIC to everyone
  // (i.e. no authentication required to perform reading/writing)
  firebase.initializeApp({
    apiKey: "AIzaSyCOmrU3k2Z4QjArla9407F7-HLTKgdLNbQ",
    authDomain: "swissknife-7fcb4.firebaseapp.com",
    databaseURL: "https://swissknife-7fcb4.firebaseio.com",
    storageBucket: "swissknife-7fcb4.appspot.com",
    messagingSenderId: "537458686494"
  });

  var db = firebase.database();

  var TESTING_KEY = "user1";
  var TESTING_DATA = {
    name: "Bob",
    age: 12
  };

  beforeEach(function(done) {
    // Clear the whole database
    db.ref("record").remove();

    // Reset the data
    db.ref("record/" + TESTING_KEY)
    .set(TESTING_DATA)
    .then(function() {
      done();
    });

  });

  it("Can correctly insert record into database", function(done) {
    db.ref("record/" + TESTING_KEY).once("value").then(function(snapshot) {
      var data = snapshot.val();

      expect(data).toEqual(TESTING_DATA);
      done();
    });

  });

});