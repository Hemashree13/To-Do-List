import React, { useEffect, useState } from 'react'

const Newpage = () => {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await fetch("http://localhost:5000/note");
                const data = await response.json();
                setNotes(data);
            } catch (error) {
                console.error("Error fetching notes:", error);
            }
        }
        fetchNotes();
    }, [])
    return (
        
        <div className="row my-3">
            
                {notes.map(note => (
                    <div className="col-md-3">
                    <div className="card">
                    <div className="card-body" key={note.id}>
                        <h5 className="card-title" >{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                    </div>
                    </div>
                    </div>
                ))}
            
        </div>
        
    )
};


export default Newpage;
