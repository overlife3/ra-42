import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item"

export default function List() {
 	const arr = useSelector(state => state.item)     
	const filtering = useSelector(state => state.form.filtering)
	const filterStr = useSelector(state => state.filter)

	if (filtering) {
		return (
			<ul className="list" >
				{
					arr.map(item =>{
						if (item.name.toLowerCase().indexOf(filterStr) === 0) {
							return <Item id={item.id} name={item.name} price={item.price} key={item.id} />	
						}
					})
				}
			</ul>
		)
		}

	return (
		<ul className="list">
			{arr.map(item => <Item id={item.id} name={item.name} price={item.price} key={item.id} />)}
		</ul>
	)
}