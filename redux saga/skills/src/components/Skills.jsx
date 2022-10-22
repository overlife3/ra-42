import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/searchReducer";

export function Skills() {
	const {items, search, loading, error} = useSelector(store => store.skills)
	const dispatch = useDispatch()

	const handleSearch = (e) => {
		const { value } = e.target
		dispatch(actions.changeSearchField(value))
	}

	const hasQuery = search.trim() !== '' // trim удаляет все пробелы табуляции и тд
  return (
		<>
			<div>
				<input type="search" value={search} onChange={handleSearch}/>
			</div>
			{!hasQuery && <div>Type something to search</div>}
			{hasQuery && loading && <div>Searching ...</div>}
			{error ? <div>Error occurred</div> : <ul>
				{items.map(item => <li key={item.id}>{ item.name }</li>)}	
			</ul>}
		</>
  );
}
