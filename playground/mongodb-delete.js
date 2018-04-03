// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Learn Node'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // deleteMany from Users with same username
  // db.collection('Users').deleteMany({name: 'Hans Peters'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne with _id
  // db.collection('Users').findOneAndDelete({_id: new ObjectID('5ac2ed6692bf651d435d7ae6')}).then((result) => {
  //   console.log(result);
  // });

  // db.close();
});