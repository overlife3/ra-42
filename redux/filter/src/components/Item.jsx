import React from "react";
import { useDispatch } from "react-redux";
import { filteringForm, removeItem, setEditItem } from "../redux/actions";
import { editingForm } from "../redux/actions";

export default function Item({ name, price, id }) {
	const dispatch = useDispatch()

	const onChange = () => {
		const obj = {
			id,
			name,
			price
		}

		dispatch(setEditItem(obj))
		dispatch(editingForm(true))
		dispatch(filteringForm(false))
	}

	const onRemove = () => {
		dispatch(removeItem(id))
		dispatch(editingForm(false))
	}

	return (
		<li>
			<span>
				{name + " " + price}
			</span>
			<button className="btn" onClick={onChange}>Редактировать</button>
			<button className="btn" onClick={onRemove} >Удалить</button>
		</li>
	)
}