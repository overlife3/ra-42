import React from "react";
import SaveForm from "./SaveForm";
import EditForm from "./EditForm"
import List from "./List";
import { useSelector } from "react-redux";

export default function Editing() {
	const editing = useSelector(state => state.form)
	return (
		<div className="editing">
			{editing ? <EditForm /> : <SaveForm />}
			<List />
		</div>
	)
}