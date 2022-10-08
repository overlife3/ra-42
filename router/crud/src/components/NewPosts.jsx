import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NewPosts() {
	const navigate = useNavigate()
	
	const onSubmit = (e) => {
		const posts = {
			id: 0,
			content: e.target.elements.content.value,
		}
		
		fetch("http://localhost:7777/posts", {
			method: "POST",
			body: JSON.stringify(posts),
			headers: {
				'Content-type' : 'application/json'
			}
		})
		.then(() => navigate("/"))
		.catch(err => console.error(err))
		
		e.preventDefault()
	}

	return (
		<div className="edit-card new-posts">
			<div className="edit-card__title">
			<h2>Новый пост</h2>
			<Link to="/" className="btn-close">X</Link>	
			</div>
			<form onSubmit={onSubmit} className="form-change">
				<div className="row">
					<img className="ava" src="https://i.ytimg.com/vi/cToaw9FNhkY/hqdefault.jpg" alt="img" />
					<input type="text" name="content"/>	
				</div>
				<button type="submit">Опубликовать</button>
			</form>
		</div>
	)
}