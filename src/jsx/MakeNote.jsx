function Notes(props){
    return (
      <div className="notebox">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <button style={{
            position: "relative",
            left: '75%'
            }} 
            type="button" 
            className="b1 btn btn-danger"
        >Delete</button>
      </div>
    )
}

function CreateNotes(note){
    return(
      <Notes 
        key={note.id}
        title={note.title}
        content = {note.content}
      />
    )
}

export default CreateNotes;