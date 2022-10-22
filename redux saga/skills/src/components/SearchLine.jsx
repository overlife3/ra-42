import React  from "react";
import { useDispatch } from "react-redux";
import { actions } from "../redux/searchReducer";

export default function SearchLine() {
	const dispatch = useDispatch()

	const onChange = (e) => {
		dispatch(actions.setSearchParams(e.target.value))
	}
  return (
		<div className="search-line">
			<input type="text" onChange={onChange}/>
		</div>
	);
}