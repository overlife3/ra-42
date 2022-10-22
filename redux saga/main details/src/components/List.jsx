import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/listReducer";
import { Item } from "./Item";
import { ErrorComponent } from "./ErrorComponent";

export function List() {
	const dispatch = useDispatch()
	const { items, loading, error } = useSelector(store => store.list)
	const dispatchAction = () => {
		dispatch(actions.detailsRequest())
	} 
	useEffect(dispatchAction, [])


	return (
		<ul>
			{loading && <div>Loading ...</div>}
			{error && <ErrorComponent error={error} onClick={dispatchAction} />}
			{!loading && !error && items.map(item => <Item key={item.id} id={item.id} name={item.name} price={item.price}/>)}
		</ul>
	)
}