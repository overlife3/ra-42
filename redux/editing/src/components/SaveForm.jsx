import { nanoid } from "nanoid";
import React from "react";
import { useDispatch } from "react-redux";
import { saveItem } from "../redux/actions";

export default function SaveForm() {
	const dispatch = useDispatch()

	const onSubmit = (e) => {
		e.preventDefault()

		const obj = {
			id: nanoid(),
			name: e.target.elements.name.value,
			price: e.target.elements.price.value
		}

		dispatch(saveItem(obj))
	}

	return (
		<form className="form" onSubmit={onSubmit}>
			<input type="text" name="name" />
			<input type="text" name="price" />
			<button>save</button>
		</form>
	)
}