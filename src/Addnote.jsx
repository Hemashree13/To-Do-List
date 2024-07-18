import NoteContext from "./context/notes/noteContext.jsx";
import {useContext, useState} from 'react';
export default function Addnote(){
    const context=useContext(NoteContext);
    const {notes,addNote}=context;
    const [note,setNote]=useState({title:"",description:"",tag:""})
    function handleclick(e){
        e.preventDefault();
        console.log(notes);
        addNote(note.title,note.description,note.tag);
    }
    function onChange(e){
        console.log(note);
        setNote({...note,[e.target.name]:e.target.value})
    }
    return(
        <div>
            <div className="container my-3">
            <h2>Add a note</h2>
            <form className="my-3" >
                    <div className="mb-3">
                        <label htmlFor="title" className="htmlForm-label">Title</label>
                        <input type="text" className="htmlForm-control" id="title" name="title" aria-descriptionribedby="emailHelp" onChange={onChange}  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="htmlForm-label">
                            description
                        </label>
                        <input type="text" className="htmlForm-control" id="description" name="description" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="htmlForm-label">
                            tag
                        </label>
                        <input type="text" className="htmlForm-control" id="tag" name="tag" onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleclick}>Add note</button>
            </form>
            </div>
        </div>
    );
}