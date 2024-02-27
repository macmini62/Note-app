import { MdOutlineDelete } from "react-icons/md";
import "../main.css";
export default function Note( {id, addedText, date, deleteNote, mode} ){

    return(
        <div className="h-72 rounded-lg">
            <div className="w-full h-[200px]">
                <p className="w-full h-full p-4 text-xl rounded-md bg-red-500">
                    {addedText}
                </p>

            </div>
            <div className="w-full h-1/5 flex flex-row items-center justify-between p-2 bg-red-300 rounded-md mt-3">
                <small>
                    {date}
                </small>
                <button
                    id="delete--button"
                    className={`${!mode ? "border-2 border-black" : "border-2 border-white"}`}
                    onClick={() => deleteNote(id)}    
                >
                    <MdOutlineDelete />
                    Delete
                </button>
            </div>
        </div>
    );
}
