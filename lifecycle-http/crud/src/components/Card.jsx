import React from "react";
import Btn from "./Btn";
import btnRemoveImg from "../icons/crest.png"

function Card({ text, handleCardList, id }) {
	const onRemoveCard = (id) => {
		fetch("http://localhost:7777/notes/" + id, {
				method: 'DELETE'
		})
		handleCardList()
	}
	return (
		<div className="note-card">
			<Btn className="btn-remove" img={btnRemoveImg} onClick={() => onRemoveCard(id)}/>
			<div className="note-card_text">
				{text}
			</div>
		</div>
	)
}

export default Card