const mongoose = require('mongoose');

//es6 prmises
mongoose.Promise = global.Promise;

//connect to the database before test run
before(function(done){

//connect to mongo

mongoose.connect('mongodb://localhost/testaroo');

//liste when the connection is done

mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...');
    done();
}).on('error', function(error){
    console.log('Connection error:', error);
});

})

//drop the characters collection before each test
beforeEach(function(){
    //drop the collection
    mongoose.connection.collections.mariochars.drop()
    done()
})