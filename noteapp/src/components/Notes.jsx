import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Note from "./Note";


function Notes() {
const [notes, setNotes] = useState([]);

function addNote(newNote) {
    setNotes((prevNotes) => {
        return [...prevNotes, newNote];
    });
}
function editNote(id, title, content) {
    const tobeUpdated = notes.find(singleNote => singleNote.id === id)
    tobeUpdated.id = id
    tobeUpdated.title = title;
    tobeUpdated.content = content;
    setNotes([...notes])


}
function deleteNote(id) {
    setNotes((prevNotes) => {
        return prevNotes.filter((noteItem) => {
            return noteItem.id !== id;
        });
    });
}
console.log(notes);
return (
    <div>
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem) => {
            return (
                <Note
                    key={noteItem.id}
                    id={noteItem.id}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                    onEdit={editNote}
                />
            );
        })}
    </div>
);
}



export default Notes;