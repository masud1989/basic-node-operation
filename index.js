const mongoClient = require('mongodb').MongoClient;

const URL = `mongodb+srv://training:Km83f9WjRx5feBqA@cluster0.tyej2.mongodb.net/?retryWrites=true&w=majority`;

const config = {useUnifiedTopology: true};  // To rempove warning 


// Connection with Mongodb =================================================

// mongoClient.connect(URL, (error) => {
//     if(error){
//         console.log('Sorry! Connection Error..');
//     }
//     else{
//         console.log('Congrates! Connection Success..');
//     }
// })


// Insert Data  =================================================

mongoClient.connect(URL, (error, mongoDbClient) => {
    if(error){
        console.log('Sorry! Connection Error..');
    }
    else{
        console.log('Congrates! Connection Success..');
        insertData(mongoDbClient);
        // deleteData(mongoDbClient);
        // deleteAllData(mongoDbClient);
    }
})

// Insert Data Starts =================================================
const insertData = (mongoDbClient) =>{
    const myDatabase = mongoDbClient.db('training');
    const myCollection = myDatabase.collection('students');
    const myData = {name: 'Alam', class:'10', roll:'4', address:'Dhaka'};

    myCollection.insertOne(myData, (error) => {
        if(error){
            console.log('Sorry! Data insert Failed');
        }
        else{
            console.log('Congrates! Data insert Success');
        }
    })
}
// Insert Data Ends =================================================



// Delete Single Data Starts =================================================
const deleteData = (mongoDbClient) =>{
    const myDatabase = mongoDbClient.db('training');
    const myCollection = myDatabase.collection('students');
    const deleteData = {name: 'Tuhin'};

    myCollection.deleteOne(deleteData, (error) => {
        if(error){
            console.log('Sorry! Data Delete Failed');
        }
        else{
            console.log('Congrates! Data Delete Success');
        }
    })
}
// Delete Single Data Ends =================================================


// Delete All Data Starts =================================================
const deleteAllData = (mongoDbClient) =>{
    const myDatabase = mongoDbClient.db('training');
    const myCollection = myDatabase.collection('students');
    const deleteData = {name: 'Tuhin'};

    myCollection.deleteMany((error, resultObj) => {
        if(error){
            console.log('Sorry! Data Delete Failed');
        }
        else{
            // console.log(resultObj);
            console.log("Item Deleted");
        }
    })
}
// Delete All Data Ends =================================================