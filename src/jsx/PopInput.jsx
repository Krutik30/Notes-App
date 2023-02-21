import React , {useState} from "react";

function popInput(prop){

    return (
        <div className="pop-box">
            <input name="title" onChange={handleChange} type="text" value={newNote.title} placeholder="Title"/>
            <textarea onChange={handleChange} value={newNote.content}></textarea>
        </div>
    )
}

export default popInput;