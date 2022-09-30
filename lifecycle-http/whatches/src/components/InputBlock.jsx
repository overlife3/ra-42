import React, { useState } from "react";

function InputBlock({ name, children }) {
	const [value, setValue] = useState('')
	
	const handleValue = (e) => {
		setValue(() => e.target.value)
	} 

	return (
		<div className="input-block">
			<p><label htmlFor={name}>{children}</label></p>
			<input id={name} value={value} name={name} onChange={handleValue}/>
		</div>
	)
}

export default InputBlock