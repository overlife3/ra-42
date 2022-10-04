import React from "react";

function ListItem({name, className, onClick}) {
	return (
		<li onClick={onClick} className={className}>
			<p>{name}</p>
		</li>
	)
}

export default ListItem