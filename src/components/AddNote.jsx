import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import "../main.css";
export default function AddNote({ addNote, mode }){
    const [text, setText] = useState('');
    const maxTextCount = 200;

    const handleChange = (event) => {
        if(event.target.value.length >= 0 && event.target.value.length <= maxTextCount){
            setText(event.target.value);
        }
    };

    const handleSave = () => {
		if (text.trim().length > 0) {
			addNote(text);
			setText('');
		}
	};

    return(
        <div className="h-72 rounded-lg">
            <div className="w-full h-[200px]">
                <textarea 
                    className="w-full h-full p-4 text-xl text-black outline-none resize-none rounded-md bg-blue-500 placeholder:text-gray-500"
                    placeholder="Add text here..."
                    value={text}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div className="w-full h-1/5 flex flex-row items-center justify-between p-2 mt-3 rounded-md bg-blue-300">
                <small>
                    {maxTextCount - text.length} {maxTextCount - text.length !== 1 ? "words" : "word"} remaining
                </small>
                <button
                    id="add--button"
                    className={`${!mode ? "border-2 border-black" : "border-2 border-white"}`}
                    onClick={handleSave}    
                >
                    <IoAddCircleOutline />
                    Add
                </button>
            </div>
        </div>
    );
}
