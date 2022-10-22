import React  from "react";
import { Routes, Route } from "react-router-dom";
import { DetailsItem } from "./components/DetailsItem";
import { List } from "./components/List";

export default function App() {
  return (
		<div>
			<Routes>
				<Route path="/"  element={<List />}/>
				<Route path="/elementq/:id"  element={<DetailsItem />}/>
			</Routes>
		</div>
	);
}