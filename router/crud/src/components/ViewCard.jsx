import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getArrProps from "../utils/getArrProps";

export default function ViewCard() {
	const [post, setPost] = useState()
	const { postId } = useParams()	

	useEffect(() => {
		getArrProps("http://localhost:7777/posts")
		.then(res => {
			setPost(res.find(item => item.id == postId))
		})
	}, [])

	const navigate = useNavigate()

	if (!post) 
		return (
		<div>
			404 нет такой страницы
		</div>
	)

	const onRemove = () => {
		fetch(`http://localhost:7777/posts/${postId}`, {
			method: "DELETE",
		})
		.then(() => navigate("/"))
		.catch(err => console.log(err))
	}

	return (
		<div className="card view-card">
			<div onClick={() => navigate(`/`)} className="btn-close">X</div>	
			<div className="card__header">
				<img className="ava" src="https://i.ytimg.com/vi/cToaw9FNhkY/hqdefault.jpg" alt="img" />
				<p className="name">Ilnaz Gilyazov</p>
			</div>
			<div className="card__content">
				<h2 className="content">{ post.content }</h2>
			</div>
			<div className="card__do">
				<button className="like">Нравится</button>
				<button className="comment">Комментировать</button>
			</div>
			<div className="card__change">
				<button onClick={() => navigate(`/posts/${postId}/edit`)} className="change">Изменить</button>
				<button onClick={onRemove} className="remove">Удалить</button>
			</div>
		</div>
	)
}