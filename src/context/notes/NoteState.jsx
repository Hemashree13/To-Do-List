import react from "react";
import NoteContext from "./noteContext.jsx";
import { useState,useEffect } from "react";
import axios from "axios";

export default function NoteState(props){
    const notesInitial=[{
        "id":"123",
        "user":"333333335g32",
        "title":"My Title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2024-6-16"
    },
    {
        "id":"124",
        "user":"333333335g3",
        "title":"My Title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2024-6-16"
    },
    {
        "id":"125",
        "user":"333333335g324",
        "title":"My Title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2024-6-16"
    },
    {
        "id":"126",
        "user":"333333335g32",
        "title":"My Title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2024-6-16"
    },
    {
        "id":"127",
        "user":"333333335g32",
        "title":"My Title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2024-6-16"
    }]
    const [notes,setNotes]=useState(notesInitial)
    
    //Add a note
    function addNote(title,description,tag){
        const id=Math.floor(Math.random()*5)+1
        const note={
            "id":id,
            "user":"333333335g324",
            "title":title,
            "description":description,
            "tag":tag,
            "date":"2024-6-16"
        };
        const createNote = async () => {    
            console.log(note);
            try {
                const response = await axios.post("http://localhost:5000/note", note);
                console.log("Note created:", response.data);
          } catch (error) {
            console.error("Error creating note:", error);
          }}
        createNote();
        setNotes(notes.concat(note)) //concat returns an array and push updates an array
    };
    return (
        <NoteContext.Provider value={{notes,addNote}}>
            {props.children}
        </NoteContext.Provider>
    );
}