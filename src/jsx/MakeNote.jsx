function Notes(props){

    function handleClick(){
      props.onDelete(props.id);
    }

    return (
      <div className="notebox">
        <p className="index">{props.id + 1}</p>
        <h2 className="nH">{props.title}</h2>
        <p className="nP">{props.content}</p>
        <button
            type="button" 
            className="b3 btn btn-danger"
            onClick={handleClick}
        >Delete</button>
      </div>
    )
}


export default Notes;