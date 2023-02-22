import './App.css';
import notes from './jsx/notes';
import Header from './jsx/Header';
import CreateNotes from './jsx/MakeNote';
import Footer from './jsx/Footer';
import { useState } from 'react';
import PopInput from './jsx/PopInput';

function App() {

  const [newNote , setNewNote] = useState({
    key: "",
    title: "",
    content: ""
  });
  const [pop , setPop] = useState(false);
 
  function handlePop(){
    setPop(!pop);
  }

  return (
    <div>
      <Header />
      <div className="flex">
        {notes.map(CreateNotes)}
      </div>
      <div>
        <button onClick={handlePop} className='new'>+</button>
        <PopInput trigger={pop}>
          
        </PopInput>
      </div>
      <Footer />
    </div>
  )
}

export default App;


