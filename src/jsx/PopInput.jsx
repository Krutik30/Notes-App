import React , {useState} from "react";
import notes from "./notes";

function PopInput(prop){

    const [newNote , setNewNote] = useState({
        key: "",
        title: "",
        content: ""
    });

    function handleChangePop(event){

        const {name , value} = event.target;
        setNewNote((prevItems) => {
            return ({
                ...prevItems,
                [name] : value
            })
        });
      }

      function addNote(event){
        if(!/^\s*$/.test(newNote.title) && newNote.title !== '')
            prop.onAdd(newNote);
        event.preventDefault();

        setNewNote({
            key: "",
            title: "",
            content: ""
        })
      }

    return (prop.trigger) ? ( 
        <div className="pop-box">
            <form>
                <input 
                    name="title"
                    className="d-block" 
                    type="text" 
                    onChange={handleChangePop} 
                    value={newNote.title} 
                    placeholder="Title" 
                    
                />
                <textarea 
                    name="content"
                    className="d-block" 
                    onChange={handleChangePop} 
                    value={newNote.content} 
                    placeholder="Take a Note"
                ></textarea>
                <button onClick={addNote} className="b1 btn btn-primary">Add</button>
            </form>
        </div>
    ) : "";
}

export default PopInput;