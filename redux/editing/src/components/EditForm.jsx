import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeItem, editingForm } from "../redux/actions";


export default function EditForm() {
	
	const dispatch = useDispatch()
	const editItem = useSelector(state => state.editItem)

	
	const [state, setState] = useState({
		name: editItem.name,
		price: editItem.price
	})
	
	
	const onSave = (e) => {
		e.preventDefault()

		const obj = {
			id: editItem.id,
			name: e.target.elements.name.value,
			price: e.target.elements.price.value
		}
	
		dispatch(changeItem(obj))
		dispatch(editingForm(false))
	}

	const onCancel = () => {
		dispatch(editingForm(false))
	}

	const onChange = (e) => {
		const name = e.target.name
		setState(prevState => ({
			...prevState,
			[name]: e.target.value
		}))
	}

	return (
		<form className="form" onSubmit={onSave}>
			<input type="text" name="name" value={state.name} onChange={onChange}/>
			<input type="text" name="price" value={state.price} onChange={onChange}/>
			<button type="submit">save</button>
			<button onClick={onCancel} >cancel</button>
		</form>
	)
}