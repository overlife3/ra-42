import {	useState } from 'react'
import { nanoid } from 'nanoid'
import ClickWindow from "./ClickWindow"
import CardsView from "./CardsView"

function SelectFile() {
	const [dataUrl, setDataUrl] = useState([])

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
		setDataUrl(dataUrl => [...dataUrl, {id: nanoid(), url: urls}])
	}

	const handleRemove = (item) => {
		setDataUrl(dataUrl => dataUrl.filter(obj => obj.id !== item.id))
	}

	return (
		<div className="select-file">
			<ClickWindow onSelect={handleSelect}/>
			<CardsView dataUrl={dataUrl} onRemove={handleRemove}/>
		</div>
	)
}

export default SelectFile