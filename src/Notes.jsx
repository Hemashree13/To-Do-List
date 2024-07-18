import { useContext } from 'react';
import NoteContext from "./context/notes/noteContext.jsx";
import NoteItem from "./NoteItem.jsx";
import Addnote from "./Addnote.jsx";
export default function Notes() {
    const context = useContext(NoteContext);
    const { notes, addNote } = context;
    return (
        <>
            <Addnote />
            <div className="row my-3">
                <h2>Your notes</h2>
                {notes.map((notes) => { return <NoteItem key={notes.id} note={notes} /> })}
            </div>
        </>
    )
}