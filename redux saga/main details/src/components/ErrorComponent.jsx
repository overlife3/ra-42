import React from "react";

export function ErrorComponent({error, onClick}) {
	return(
		<div>
			<p>Error: {error}</p>
			<button onClick={onClick}>Повторить запрос</button>
		</div>
	)
}