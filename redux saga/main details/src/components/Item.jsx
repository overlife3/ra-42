import React from "react";
import { Link } from "react-router-dom";

export function Item({name, price, id}) {
	

	return (
		<li>
			<div className="name">name: {name}</div>
			<div className="price">price: {price}</div>
			<p>Перейти к услуге: {<Link to={"/elementq/" + id}> ссылка </Link>}</p>
		</li>
	)
}