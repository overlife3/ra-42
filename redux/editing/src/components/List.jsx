import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item"

export default function List() {
 	const arr = useSelector(state => state.item)     

	return (
		<ul className="list">
			{arr.map(item => <Item id={item.id} name={item.name} price={item.price} key={item.id} />)}
		</ul>
	)
}