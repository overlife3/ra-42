import React, { useState, useEffect } from "react";
import getForm from "../utils/getForm";

import NoteAddBlock from "./NoteAddBlock";
import Btn from "./Btn";
import btnUpdateImg from "../icons/update.svg"
import Card from "./Card"

function Note() {
	const [cardList, setCardList] = useState([])
	const [isLoaded, setIsLoaded] = useState(false)
	const [error, setError] = useState(null)
	
	const handleCardList = () => {
		setCardList([])
		setIsLoaded(false)
		setError(null)
		
		setTimeout(() => {
			fetch('http://localhost:7777/notes', {
				method: 'GET'
			}).then(response => response.json()).then(
				result => {
					setCardList(result)
					setIsLoaded(true)
				},
				error => {
					setError(true)
					setIsLoaded(true)
				}
			)
		}, 1000)
	}


	// async function remove() {
	// 	for (let i = 0; i < 30; i++) {
	// 		await fetch("http://localhost:7777/notes/" + i, {
	// 			method: 'DELETE'
	// 		})
	// 	}
	// }
	// remove()

	useEffect(() => {
		setTimeout(() => {
			fetch('http://localhost:7777/notes', {
				method: 'GET'
			}).then(response => response.json()).then(
				result => {
					setCardList(result)
					setIsLoaded(true)
				},
				error => {
					setError(true)
					setIsLoaded(true)
				}
			)
		}, 1000)
	}, [])



	return (
		<div className="note">
			<div className="note-header">
				<h2 className="note-title">Note</h2>
				<Btn onClick={handleCardList} className="btn-update" img={btnUpdateImg}/>
			</div>
			<div className="note-list">
				{
					(() => {
						if (error) {
							return <p className="error-text">Error!</p>
						} else if (!isLoaded) {
							return <p className="loaded-text">Loading...</p>
						}	else {
							return cardList.map(item => {
								return (
									<Card key={item.id} text={item.content} id={item.id} handleCardList={handleCardList}/>
								)
							})
						}
					})()
				}
			</div>
			<div className="note-add">
				<NoteAddBlock handleCardList={handleCardList}/>
			</div>
		</div>
	)
}

export default Note