import Note from "./Note";
import AddNote from "./AddNote";

export default function NoteList({ notes, handleAddNote, handleDeleteNote, mode }){

    return(
        <div id="note--list" className={`${!mode ? "border-2 border-black" : "border-2 border-white"}`}>
            {notes.map((note) => (
                <Note
                    id={note.id}
                    addedText={note.text}
                    date={note.date}
                    deleteNote={handleDeleteNote}
                    mode={mode}
                />
            ))}
            <AddNote
                addNote={handleAddNote}
                mode={mode}
            />
        </div>
    );
}
