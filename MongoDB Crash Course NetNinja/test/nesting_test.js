const assert = require('assert')
const mongoose = require('mongoose')
const Author = require('../models/author')

//describe test
describe('nesting records', function(){

this.beforeEach(function(done){
  mongoose.connection.collections.authors.drop(function(){
  done()
  })
})

  //create test
  it('create an autor with sub-documents', function(done){
    var pat = new Author({
      name:'Patrick',
      books: [{title: 'name of wind', pages: 400}]
    })
    pat.save().then(function(){
      Author.findOne({name: 'Patrick'}).then(function(record){
        assert(record.books.length === 1)
        done()
      })
    })
  })
})
  
  it('adds a book to an author', function(done){

    var pat = new Author({
      name:'Patrick',
      books: [{title: 'name of wind', pages: 400}]
      
    })

    pat.save().then(function(){
      Author.findOne({name: 'Patrick'}).then(function(record){
        //add a book to the book array
        record.books.push({title:'wise man', pages:500})
        record.save().then(function(){
          Author.findOne({name: 'patrick'}).then(function(result){
            assert(result.books.length ===2)
            done()
          })
        })
      })
    })
});