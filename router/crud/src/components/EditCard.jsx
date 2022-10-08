import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCard() {
	const navigate = useNavigate()
	const { postId } = useParams()

	const onSubmit = (e) => {
		const post = {
			id: Number(postId),
			content: e.target.elements.edit.value
		}

		fetch("http://localhost:7777/posts", {
			method: "POST",
			body: JSON.stringify(post),
			headers: {
				'Content-type' : 'application/json'
			}
		})
		.then(() => navigate(`/posts/${postId}`))
		.catch(err => console.error(err))

		e.preventDefault()
	}

	return (
		<div className="edit-card">
			<div className="edit-card__title">
			<h2>Редактировать публикацию</h2>
			<div onClick={() => navigate(`/posts/${postId}`)} className="btn-close">X</div>	
			</div>
			<form className="form-change" onSubmit={onSubmit}>
				<div className="row">
					<img className="ava" src="https://i.ytimg.com/vi/cToaw9FNhkY/hqdefault.jpg" alt="img" />
					<input type="text" name="edit"/>	
				</div>
				<button type="submit">Сохранить</button>
			</form>
		</div>
	)
}