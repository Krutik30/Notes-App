import './App.css';
import Header from './jsx/Header';
import Notes from './jsx/MakeNote';
import { useState } from 'react';
import PopInput from './jsx/PopInput';
import notesArray from './jsx/notes';

const JSX = {
  position: "fixed",
  right: "30.5%",
  top: "31%",
  fontSize: "medium",
  width: "25px",
  height: "25px",
  backgroundColor: "red",
  color: "black"
}

function App() {

  const [pop , setPop] = useState(false);
  const [notes , setNotes] = useState([]);

  function handlePop(){
    setPop(!pop);
  }

  function addNote(newNote){
    notesArray.push(newNote);
    setNotes(prev => {
      return [...prev,newNote];
    });
  }

  function deleteNote(id){
    notesArray.slice(id,id+1);
    setNotes(prev => {
      return prev.filter((noteI , index) => {
        return index !== id;
      })
    })
  }
  

  return (
    <div>
      <Header />
      <div className="flex">
        {
          notes.map((note,index) => {
            return(
              <Notes 
                key={index}
                id={index}
                title={note.title}
                content = {note.content}
                onDelete={deleteNote}
              />)
          })
        }
      </div>
      <div>
        <button
          style={pop ? JSX : {}}
          onClick={handlePop} className='new'>{pop ? "X" : "+"}</button>
        <PopInput onAdd={addNote} trigger={pop} />
      </div>
    </div>
  )
}

export default App;


