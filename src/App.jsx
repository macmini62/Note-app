import React from "react";
import { useState } from "react";
import Index from "./index";

export default function App(){
    const [display, setDisplay] = useState();

    let items = [4];

	function addTextarea(){
        setDisplay(displayItem => [...display, displayItem]);
        console.log(display);
	}

	function removeTextarea(){

	}



    return(
        <div className="w-screen h-screen p-24">
            <div className="relative w-2/5 h-2/3 border-4 border-[#a84cff] rounded-2xl p-2">
                <button id="addButton" onClick={addTextarea} className="w-20 h-12 m-4 font-semibold rounded-lg bg-[#7c88f5] active:scale-90">
                    Add
                </button>
                <button id="addButton" onClick={removeTextarea} className="absolute right-0 w-20 h-12 m-4 font-semibold rounded-lg bg-[#7c88f5] active:scale-90">
                    Delete
                </button>
                <div className="textContainer w-full h-5/6 p-2 grid grid-cols-2 gap-4 rounded-md bg-[#dbbcff] overflow-y-auto">
                    <Index {items.map(item => id={item.id})}/>
                </div>
            </div>
        </div>
    );
}
