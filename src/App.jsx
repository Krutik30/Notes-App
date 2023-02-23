import './App.css';
import Header from './jsx/Header';
import Notes from './jsx/MakeNote';
import Footer from './jsx/Footer';
import { useState } from 'react';
import PopInput from './jsx/PopInput';

function App() {

  const [pop , setPop] = useState(false);
  const [notes , setNotes] = useState([]);

  function handlePop(){
    setPop(!pop);
  }

  function addNote(newNote){
    setNotes(prev => {
      return [...prev,newNote];
    });
  }

  function deleteNote(id){
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
        <button onClick={handlePop} className='new'>{pop ? "X" : "+"}</button>
        <PopInput onAdd={addNote} trigger={pop} />
      </div>
    </div>
  )
}

export default App;


