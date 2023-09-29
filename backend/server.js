const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

mongoose.connect('mongodb+srv://agherakrutik99:Krutik30@cluster0.raa0ml1.mongodb.net/notes')

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('DB YES YES');
})

connection.on('error', (error) => {
    console.log('mongo error: ' + error);
})

const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true , "title vagar kem chale"]
    }

})


const Notes = mongoose.model("Notes",NotesSchema);

app.listen(3000, ()=>{
    console.log('YES I AM Running ohhh yeah');
})
