import React from "react";
import "./index.css";

export default function Index(){

	function saveTextarea(){
		console.log("saved");
	}

	return(
		<div>
			<textarea id placeholder="Type here..."/>
			<button id="saveButton" onClick={saveTextarea} className="w-14 h-8 m-0.5 font-semibold rounded-lg bg-[#8484df] active:scale-110">
				Save
			</button>
		</div>
	);
}

