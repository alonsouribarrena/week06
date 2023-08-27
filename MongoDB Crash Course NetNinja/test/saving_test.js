const mocha = require('mocha')
const assert = require('assert')
const MarioChar = require('../models/mariochar')

//describe test
describe('saving records',function(){
  //create test
  it('save a record to the db', function(done){
    var char = new MarioChar({
      name: 'Mario',

    });
    
    char.save().then(function(){
      assert(char.isNew===false);
      done()
    });

  });

});