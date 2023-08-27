const mocha = require('mocha')
const assert = require('assert')
const MarioChar = require('../models/mariochar')

//describe test
describe('updating records',function(){
var char;
  beforeEach(function(done){
    char = new MarioChar({
      name: 'Mario',
      weight: 50

    });
    
    char.save().then(function(){
      done()
    });
  })
  
  //create test
  it('increments weight by 1', function(done){

    MarioChar.updateMany({}, {$inc:{weight: 1}}).then(function(){
      MarioChar.findOne({name:'Mario'}).then(function(record){
        assert(record.weight === 51)
        done();
      })
    })

  });

});