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
        // insertData(mongoDbClient);
        // deleteData(mongoDbClient);
        // deleteAllData(mongoDbClient);
        // findOneWithOutCondition(mongoDbClient);
        // findOneWithCondition(mongoDbClient);
        // findAll(mongoDbClient);
        // findDataByProjection(mongoDbClient);
        // findDataByQuery(mongoDbClient);
        // findDataByLimit(mongoDbClient);
        // findDataBySort(mongoDbClient);
        // updateData(mongoDbClient);
        // createCollection(mongoDbClient);
        deleteCollection(mongoDbClient);
    }
})

// Insert Data Starts =================================================
const insertData = (mongoDbClient) =>{
    const myDatabase = mongoDbClient.db('training');
    const myCollection = myDatabase.collection('students');
    const myData = {name: 'Mahin', class:'10', roll:'6', address:'Bogura'};

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


// Find Data without Condition===============================
const findOneWithOutCondition =  (mongoDbClient) =>{
    const myDatabase = mongoDbClient.db('training');
    const myCollection = myDatabase.collection('students');
    const findCondition = {};
    myCollection.findOne (findCondition, (error, result) =>{
        console.log(result);
    })
}


// Find Data with Condition===============================
const findOneWithCondition =  (mongoDbClient) =>{

    const myDatabase = mongoDbClient.db('training');
    const myCollection = myDatabase.collection('students');

    const findCondition = {roll: "6"};

    myCollection.findOne (findCondition, (error, result) =>{
        console.log(result);
    })
}


// Find All Data ===============================
const findAll =  (mongoDbClient) =>{
    const myDatabase = mongoDbClient.db('training');
    const myCollection = myDatabase.collection('students');
    myCollection.find().toArray ((error, result) =>{
        console.log(result);
    })
}
// Find All Data by Projection ===============================
const findDataByProjection =  (mongoDbClient) =>{
    const myDatabase = mongoDbClient.db('training');
    const myCollection = myDatabase.collection('students');
    const itemObj = {};
    const itemProjection = {$projection:{class:"", name:""}}
    myCollection.find(itemObj,itemProjection).toArray ((error, result) =>{
        console.log(result);
    })
}

// Find All Data by Query ===============================
const findDataByQuery =  (mongoDbClient) =>{
    const myDatabase = mongoDbClient.db('training');
    const myCollection = myDatabase.collection('students');
    // const query = {address: 'Bogura', roll: '3'};
    const query = {name: 'Safin'};
    
    myCollection.find(query).toArray ((error, result) =>{
        console.log(result);
    })
}

// Find All Data by Limit ===============================
const findDataByLimit =  (mongoDbClient) =>{
    const myDatabase = mongoDbClient.db('training');
    const myCollection = myDatabase.collection('students');
  
    myCollection.find().limit(2).toArray ((error, result) =>{
        console.log(result);
    })
}

// Find All Data by Sort ===============================
const findDataBySort =  (mongoDbClient) =>{
    const myDatabase = mongoDbClient.db('training');
    const myCollection = myDatabase.collection('students');
    // const sortOption = {roll:1}   //for assending
    const sortOption = {roll:-1}  //for dessending
  
    myCollection.find().sort(sortOption).toArray ((error, result) =>{
        console.log(result);
    })
}

//Update Data===============================================
const updateData = (mongoDbClient) => {
    const myDatabase = mongoDbClient.db('training');
    const myCollection = myDatabase.collection('students');

    const query = {roll: '3'};
    const updateValue = {$set:{name:'Saad', address:'Sirajganj'}};

    myCollection.updateOne(query, updateValue, function (error, result){
        console.log(result);
    })
}


// Create Collection =========================================================
const  createCollection =(mongoDbClient) =>{
    const myDatabase = mongoDbClient.db('training');

    myDatabase.createCollection('departments', (error, result) => {
        console.log(result);
    })
}


// Delete Collection =========================================================
const  deleteCollection =(mongoDbClient) =>{
    const myDatabase = mongoDbClient.db('training');

    myDatabase.dropCollection('nameList', (error, result) => {
        console.log(result);
    })
}