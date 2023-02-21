import './App.css';
import notes from './jsx/notes';
import Header from './jsx/Header';
import CreateNotes from './jsx/MakeNote';
import Footer from './jsx/Footer';
import { useState } from 'react';
import popInput from './jsx/PopInput';

function App() {

  const [newNote , setNewNote] = useState({
    key: "",
    title: "",
    content: ""
  });

  

  return (
    <div>
      <Header />
      <div className="flex">
        {notes.map(CreateNotes)}
      </div>
      <div>
        <button className='new'>+</button>
        <popInput

        />
      </div>
      <Footer />
    </div>
  )
}

export default App;


