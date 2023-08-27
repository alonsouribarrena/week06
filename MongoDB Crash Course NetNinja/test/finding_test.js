const mocha = require('mocha')
const assert = require('assert')
const MarioChar = require('../models/mariochar')

//describe test
describe('finding records',function(){
var char;
  beforeEach(function(done){
    char = new MarioChar({
      name: 'Mario',

    });
    
    char.save().then(function(){
      done()
    });
  })
  
  //create test
  it('find one record from the db', function(done){

    MarioChar.findOne({name: 'Mario'}).then(function(result){
      assert(result.name === 'Mario');
      done()
    })

  });
  //by id
  it('find one record by id from the db', function(done){

    MarioChar.findOne({_id: char._id}).then(function(result){
      assert(result._id.toString() === char._id.toString());
      done()
    })

  });

});