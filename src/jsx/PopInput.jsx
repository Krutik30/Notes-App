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
          return {
              ...prevItems,
            [name] : value 
          }
        });
      }


      function addNote(event){
        prop.onAdd(newNote);
        event.preventDefault();
      }

    return (prop.trigger) ? ( 
        <div className="pop-box">
            <form>
                <button  className="b1 btn btn-danger">X</button>
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
                <button onClick={addNote} className="btn btn-primary">Add</button>

            </form>
        </div>
    ) : "";
}

export default PopInput;