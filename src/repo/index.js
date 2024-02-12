const mongoose = require('mongoose');

const username = "saiteja001jally";
const password = encodeURIComponent("$aiteja@2024");;
const clusterName = "profilecluster";
const dbName = "profile";

const uri = `mongodb+srv://${username}:${password}@${clusterName}.fmtrdrg.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// Connect to MongoDB Atlas
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>{
        console.log('Connected to MongoDB')

    } )
    .catch(err => console.error('Connection error:', err));

// console.log(mongoose.)

module.exports = mongoose;
