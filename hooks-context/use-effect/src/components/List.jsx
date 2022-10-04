import React from "react";
import ListItem from "./ListItem";

function List({users, onSelectUser, activeUser}) {
  const onClick = (id) => {
		onSelectUser(id)
	}

	return (
		<ul className="list">
			{users.map(item => <ListItem 
				onClick={() => onClick(item.id)} 
				className={activeUser === item.id ? 'active' : ''} 
				key={item.id} 
				name={item.name} />)}
		</ul>
	)
}

export default List