const HomePage = () => {
    return ( 
        <>
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
        </>
     );
}
 
export default HomePage;