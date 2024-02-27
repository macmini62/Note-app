import "../main.css";

export default function Mode({ handleMode, mode }){

    return(
        <div>
            <button 
                id="mode--button"
                className={`${!mode ? "bg-black border-2 border-white text-white" : "border-2 border-black"}`}
                onClick={handleMode}
            >
                Mode
            </button>
        </div>
    );
}
