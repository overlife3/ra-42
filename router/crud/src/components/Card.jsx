import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ id, content }) {
	const navigate = useNavigate()

	const onClick = (e) => {
		if (e.target.closest(".card")) navigate(`/posts/${id}`)
	}

	return (		
			<div onClick={onClick} className="card">
				<div className="card__header">
					<img className="ava" src="https://i.ytimg.com/vi/cToaw9FNhkY/hqdefault.jpg" alt="img" />
					<p className="name">Ilnaz Gilyazov</p>
				</div>
				<div className="card__content">
					<h2 className="content">{ content }</h2>
				</div>
				<div className="card__do">
					<button className="like">Нравится</button>
					<button className="comment">Комментировать</button>
				</div>
				<div className="card__comment">
					<input type="text" placeholder="Введите комментарий..."/>
				</div>
			</div>
	)
}