import React from "react";
import { Routes, Route, Link } from "react-router-dom"

import Main from "./Main"
import NewPosts from "./NewPosts"
import EditCard from "./EditCard"
import ViewCard from "./ViewCard"

export default function Crud() {
	return (
		<div className="crud">
			<Routes>
				<Route path="/" element={<Main />} /> 
				<Route path="/posts/new" element={<NewPosts />} />
				<Route path="/posts/:postId/edit" element={<EditCard />} />
				<Route path="/posts/:postId" element={<ViewCard />} />
				<Route path='*' element={<div>404 <Link to='/'>Перейти на главную</Link></div>}/>
			</Routes>
		</div>
	)
}