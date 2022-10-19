import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { actions } from "../redux/photos";
import { nanoid } from "nanoid";

export function SelectFile() {
	const dispatch = useDispatch()

	const fileToDataUrl = file => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
		
			fileReader.addEventListener('load', evt => {
				resolve(evt.currentTarget.result);
			});
			
			fileReader.addEventListener('error', evt => {
				reject(new Error(evt.currentTarget.error));
			});
			
			fileReader.readAsDataURL(file);
		});
	}
	
	const handleSelect = async (evt) => {
		const files = [...evt.target.files];
		const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
		const obj = {
			id: nanoid(),
			url: urls
		}
		dispatch(actions.addPhoto(obj))

	}

	return (
		<div className="select-file">
			<input onChange={handleSelect} type="file" />
		</div>
	)
}