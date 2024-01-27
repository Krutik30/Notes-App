const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "title vagar kem chale"]
    }

})


const Notes = mongoose.model("Notes", NotesSchema);
