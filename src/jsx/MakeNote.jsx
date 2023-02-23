function Notes(props){

    function handleClick(){
      props.onDelete(props.id);
    }

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
            onClick={handleClick}
        >Delete</button>
      </div>
    )
}


export default Notes;