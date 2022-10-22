import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { actionsItem } from "../redux/itemReducer";

export function DetailsItem() {
	const dispatch = useDispatch()
	const { id } = useParams() 
	useEffect(() => {
		dispatch(actionsItem.detailsRequest(id))
	}, [])
	const { item, loading, error } = useSelector(store => store.item)

	
	return (
		<>
			{loading && <div>Loading ...</div>}
			{error && <div>Error: {error}</div>}
			{!loading && !error && 
			<div>
				<div className="name">name: {item?.name}</div>
				<div className="price">price: {item?.price}</div>
				<div className="content">content: {item?.content}</div>
			</div>}
			<Link to="/">Вернуться к списку</Link>
		</>
	)
}