import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/listReducer";
import { Item } from "./Item";

export function List() {
	const dispatch = useDispatch()
	const { items, loading, error } = useSelector(store => store.list)
	useEffect(() => {
		dispatch(actions.detailsRequest())
	}, [])


	return (
		<ul>
			{loading && <div>Loading ...</div>}
			{error && <div>Error: {error}</div>}
			{!loading && !error && items.map(item => <Item key={item.id} id={item.id} name={item.name} price={item.price}/>)}
		</ul>
	)
}