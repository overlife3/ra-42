import React, {useState} from "react";
import { nanoid } from "nanoid";
import sendForm from "../utils/sendForm";

import Btn from "./Btn";
import btnAddImg from '../icons/arrow.png'


function NoteAddBlock({ handleCardList }) {
	const [textForm, setTextForm] = useState('')

	const handleTextForm = (e) => {
		const text = e.target.value;
		setTextForm(() => text)
	}

	const onSendForm = () => {
		const id = nanoid();
		const content = textForm;
		setTextForm('')
		const obj = {
			id: id,
			content: content
		}
		sendForm(obj)
		handleCardList()
	}

	return (
		<form className="note-add-block" >
			<p className="note-add-block__title">New note</p>
			<textarea name="content" value={textForm} onChange={handleTextForm}/>
			<Btn onClick={onSendForm} className="btn-add" img={btnAddImg}/> {/* искусственная отправка формы */}
		</form>
	)
}

export default NoteAddBlock