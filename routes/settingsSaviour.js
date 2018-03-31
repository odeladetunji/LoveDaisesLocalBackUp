/*
Getting the homepage
*/
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongo = require('mongodb');


router.post('/', function(req, res){
  // getting html form input
    //console.log('Data Arrived on profileSetUp1.......................');
    console.log(req.body);
    console.log('the Data above was from settingsSaviour Form');
    var alaise3 = req.body.aliase;
    var message3 = req.body.daises;
    var tag3 = req.body.select;
    //var amount = req.body.amount;
    var email = req.cookies.daises;
    
    console.log(email + "   settingsSaviour.js");
    var connection = mysql.createConnection({
      host     : '127.0.0.1',
      user     : 'root',
      password : '',
      database : 'lovedaises'
    });

    //connecting to database!
 connection.connect();

 var url = 'mongodb://127.0.0.1:27017/test';

function sendingMessageBackToSettings(){
     res.send({'message': 'Saviour Daises was submitted succesfully'});
     console.log('Saviour Daises Was inputed successfully');
}

     // var url = 'mongodb://127.0.0.1:27017/test';
     var someGeneratedUniqueIdentity;
     function pushingUniqueKeyIntoArray (gettingRamdomValues, vinil, callback){
          someGeneratedUniqueIdentity = gettingRamdomValues;
         // console.log(someGeneratedUniqueIdentity + " now......................i");
                 //var vinil = this.vinil;
                 vinil.daisesNumber.push(gettingRamdomValues);
                     mongo.connect(url, function(err, db){
                         db.collection('daisesratings').update({"name": "Ratings of Daises"}, {$set: {'Rating': vinil}})
                         identityOfPerticularDaises(gettingRamdomValues, vinil);
                         db.close();
                     });
          callback(someGeneratedUniqueIdentity);
    }

    function identityOfPerticularDaises(gettingRamdomValues, vinil){
                  var postIdentifier = gettingRamdomValues;
                  // vinil.postIdentifier = {};
                  Object.defineProperty(vinil, postIdentifier, { value: {},
                                                             writable: true,
                                                             enumerable: true,
                                                             configurable: true });
                  mongo.connect(url, function(err, db){
                         db.collection('daisesratings').update({"name": "Ratings of Daises"}, {$set: {'Rating': vinil}});
                         db.close();
                         //console.log(vinil.gettingRamdomValues + "  000000000000000000000");
                         console.log( Object.keys(vinil) + "  2222222222222222")
                  });

                  console.log('was identity created!!////////////');
    }

    function insertDaisesIntoDatabase(theGeneratedIdentity){
              var dataToUpdate1 = {
                    'Email': email,
                    'Tag': tag3,
                    'Discursion': message3,
                    'DaisesIdentity': theGeneratedIdentity,
                    'Alaises': alaise3
              }
              
              console.log(dataToUpdate1);
              console.log('we also Got into this place!');

             function insertingIntoDatabase1(identity){
                   console.log('did we actually entered this function  ?????');
                   var sql = "INSERT INTO daisesposting SET ?";
                   connection.query(sql, dataToUpdate1, function (error, results, fields) {
                        if(error) throw error;
                         console.log('Saviour Daises was inputed to Database');
                          sendingMessageBackToSettings();
                          upDateDaisesPostingTable(theGeneratedIdentity);
                         return;
                   });
             }

             insertingIntoDatabase1(theGeneratedIdentity);
        
              
              
              function upDateDaisesPostingTable(identity){
                    var firstname; // here?
                    var lastname; // 
                    var theGeneratedIdentity = identity;
                    console.log(theGeneratedIdentity);
                    console.log('upDateDaisesPostingTable Function was called 2');
                    function nowUpdatingtheDatabase(theGeneratedIdentity){
                    
                       var sql = 'UPDATE daisesposting SET FirstName = ?, LastName = ? Where DaisesIdentity = ?';
                        connection.query(sql, [firstname, lastname, identity], function(error, results, fields){
                             if(error)throw error;
                             console.log('It Was UpdatedSuccessFully! ooooooooooooooooooooooo');
                        });

                    }  
                    console.log("we got to line 1");
                    console.log(email);
                    var sql = 'select FirstName, LastName from registrationtable where Email = ?';
                    console.log("we got to line 1");
                    
                    connection.query(sql, [email], function(error, results, fields){
                      if(error)throw error;
                      firstname = results[0].FirstName;
                      lastname = results[0].LastName;
                      
                      console.log(firstname + " " + lastname);
                      nowUpdatingtheDatabase(theGeneratedIdentity);
                    });
              }
    }

    function generatingUniqueDaisesIdentity(){
         var someRandomNiga;
             mongo.connect(url, function(err, db){
                    if(err) throw err;
                    var cursor = db.collection('daisesratings').find({'name': "Ratings of Daises"}).limit(1);
                           cursor.forEach(function(doc, err){
                              if(err) throw err;
                              console.log(doc + "this is doc");
                              var arrayObject = doc.Rating.daisesNumber;   // its an array of identity
                              console.log(arrayObject + " this is arrayObject!!!!");
                              var dataToUpdate = doc.Rating;
                              console.log(dataToUpdate + 'this is data to update')
                              // generation of random number!

                               var generateRandomNumber = function getRandomInt(min, max) {
                                            min = Math.ceil(min);
                                            max = Math.floor(max);
                                            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
                               }
                               var min = 1;
                               var max = 100000000000000;
                               
                               var ran3 = "ABC" + generateRandomNumber(min, max);
                               console.log(ran3+'it worked lets log it')
                               
                               vinil = dataToUpdate;
                               console.log(vinil + 'check vinil');
                               var rateValue = arrayObject;
                     for(i=0; i<=rateValue.length; i++){
                             console.log('Entering this Loop.........');
                             if(rateValue[i] == ran3){
                                 for(i=0; i<=1000000; i++ ){
                                   var someRandomValue = "ABC" + generateRandomNumber();
                                      if(rateValue[i] != someRandomValue || ran3){
                                           //console.log(vinil + 'It seems something is wrong with this code block');
                                           pushingUniqueKeyIntoArray(someRandomValue, vinil, function(someGeneratedUniqueIdentity){
                                                  var theGeneratedIdentity = someGeneratedUniqueIdentity;
                                                  insertDaisesIntoDatabase(theGeneratedIdentity);
                                           });
                                           identityOfPerticularDaises(someRandomValue, vinil)
                                              console.log(vinil + 'checking vinil again');
                                              return;
                                      }
                                 }
                                 
                                
                             }
                             if(rateValue[i] != ran3){
                                  pushingUniqueKeyIntoArray(ran3, vinil, function(someGeneratedUniqueIdentity){
                                      var theGeneratedIdentity = someGeneratedUniqueIdentity;
                                      insertDaisesIntoDatabase(theGeneratedIdentity);
                                  });
                                  identityOfPerticularDaises(ran3, vinil);
                                  console.log('Code worked up to this place');
                                  return;
                             } 
                     }

                 }, function(){
                         db.close();
              });              
            
        });
             
           //callback(someGeneratedUniqueIdentity);
  }

       // loop through req.body to get the input!
 // for(x in req.body){
 //   if(x == 'message3'){
        generatingUniqueDaisesIdentity();
     //   return;
    //}
 // }
 
})


module.exports = router;
