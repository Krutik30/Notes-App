const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

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
