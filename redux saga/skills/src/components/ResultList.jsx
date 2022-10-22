import React  from "react";
import { useSelector } from "react-redux";


export default function ResultList() {
  const arr = useSelector(store => store.search)

	return (
		<ul className="result-list">
			{
				arr.map((item, index) => <li key={index}>{item}</li>)
			}
		</ul>
	);
}