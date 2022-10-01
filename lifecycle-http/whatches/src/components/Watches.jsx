import React, { useState } from "react";
import { nanoid } from "nanoid";

import CardWatch from "./CardWatch";
import Form from "./Form";
import validInput from "../utils/validInput";

function Watches() {
	const [watchList, setWatchList] = useState([
		{
			id: '',
			namezone: 'Moscow',
			timezone: '3:00'
		}
	])

	const onSubmit = (e) => {
		e.preventDefault()
		const formData = new FormData(e.target)
		let obj = {
			id: nanoid()
		}
		for (let [key, value] of formData.entries()) {
			obj = {...obj, [key]: value}
		}

		if (validInput(obj.timezone)) {
			alert(validInput(obj.timezone))
		}	else {
			setWatchList(prevList => [...prevList, obj])
		}

	}

	const onRemoveItem = (id) => {
		setWatchList(prevList => prevList.filter(item => item.id !== id))
	}

	return (
		<div className="watches">
			<Form onSubmit={onSubmit} />
			<div className="watch-list">
			{watchList.map(item => {
				return (
					<CardWatch time={'123'} id={item.id} key={item.id} nameZone={item.namezone} onRemoveItem={onRemoveItem} timeZone={item.timezone}/>
				)
			})}
			</div>
		</div>
	)
}

export default Watches