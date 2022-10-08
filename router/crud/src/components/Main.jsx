import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getArrProps from "../utils/getArrProps";
import Card from "./Card";

export default function Main() {
	const [arrPosts, setArrPosts] = useState()

	useEffect(() => {
		getArrProps("http://localhost:7777/posts")
		.then(res => setArrPosts(res))
	}, [])

	return (
		<div className="main">
			<div className="main__header">
				<Link to="/posts/new" className="created">Создать пост</Link>
			</div>
			<div className="main__cards">
				{ arrPosts?.map(item => <Card key={item.id} id={item.id} content={item.content} />)	}
			</div>
		</div>
	)
}