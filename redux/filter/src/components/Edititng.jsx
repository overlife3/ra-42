import React from "react";
import SaveForm from "./SaveForm";
import EditForm from "./EditForm"
import List from "./List";
import { useSelector } from "react-redux";
import { FilterForm } from "./FilterForm";

export default function Editing() {
	const editing = useSelector(state => state.form.editing)

	const filtering = useSelector(state => state.form.filtering)

	if (filtering) return( 
		<div className="editing">
			<FilterForm />
			<List />
		</div>
	)
	return (
		<div className="editing">
			{editing ? <EditForm /> : <SaveForm />}
			<List />
		</div>
	)
}