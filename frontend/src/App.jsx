import './App.css';
import Header from './jsx/Header';
import Notes from './jsx/MakeNote';
import { useState } from 'react';
import PopInput from './jsx/PopInput';
import notesArray from './jsx/notes';
import Login from './jsx/Login';
import HomePage from './pages/home';

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

  const [ isLogin, setIsLogin ] = useState(false);
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
      {/* <Login /> */}
      {/* { isLogin && <Home />} */}
      <HomePage />
    </div>
  )
}

export default App;


