import React, { useState } from "react";
import { setNumber } from "../redux/actions";
import { useDispatch } from "react-redux"

export function Input() {
	const dispatch = useDispatch()
	const [state, setState] = useState(0) 
	const onKeyDown = (e) => {
		if (e.key === "Backspace") {
			setState('')
			dispatch(setNumber(0))
			return
		}
		
		const key = Number(e.key)

		if (key >= 0 && key <= 5 && (key === 0 || key)) {
			setState(key)
			dispatch(setNumber(key))
		}	else {
			return
		}
	}


	return (
		<div className="input">
			<label htmlFor="input">Количество фактов: </label>
			<input id="input" onKeyDown={onKeyDown} onChange={() => {}} value={state} min="0" max="5" />
		</div>
	)
}