import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NoteList from "./NoteList";
import Mode from "./Mode";
import "../main.css";

export default function App(){

    const date = new Date().toLocaleDateString();

    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "Notes...",
            date: date
        }
    ]);
    const [mode, setMode] = useState(false);

    const addNotes = (text) => {
        const newNote = {
            id: nanoid(),
            text: text,
            date: date
        };
        setNotes([...notes, newNote]);
    };

    const deleteNotes = (id) => {
        const newNote = notes.filter((note) => note.id !== id);
        setNotes(newNote);
    };

    const changeMode = () => {
        setMode(mode => mode = !mode);
    }

    return(
        <div id="body" className={`${mode && "bg-black"}`}>
            <div className="relative container mx-auto h-4/5 overflow-y-auto">
                <header id="header" className={`${!mode ? "border-2 border-black" : "border-2 border-white"}`}>
                    <p className="text-2xl font-semibold underline">
                        Note Application
                    </p>
                    <Mode
                        handleMode={changeMode}
                        mode={mode}
                    />
                </header>
                <NoteList
                    notes={notes}
                    handleAddNote={addNotes}
                    handleDeleteNote={deleteNotes}
                    mode={mode}
                />
            </div>
        </div>
    );
}
