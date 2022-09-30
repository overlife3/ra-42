import React from "react";

import InputBlock from "./InputBlock";

function Form({ onSubmit }) {
	return (
		<form onSubmit={onSubmit}>
			<InputBlock name="namezone">Название</InputBlock>
			<InputBlock name="timezone">Временная зона</InputBlock>
			<button>Добавить</button>
		</form>
	)
}

export default Form