import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editingForm, filteringForm, searchItem } from "../redux/actions";

export function FilterForm() {
	const dispatch = useDispatch()
	const arr = useSelector(state => state.item)

	const onChange = (e) => {	
		dispatch(searchItem(e.target.value.toLowerCase()))
	} 

	const onCancel = () => {
		dispatch(filteringForm(false))
	}
	return (
		<form className="form">
			<input type="text" name="filter" onChange={onChange}/>
			<button onClick={onCancel}>cancel</button>
		</form>
	)
}