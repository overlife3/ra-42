import { useState } from "react"
import sortDate from "../utils/sortDate"
import validator from "../utils/validator";
import TrainingForm from "./TrainingForm"
import TrainingList from "./TrainingList"


function TrainingBlock() {
	const [data, setData] = useState(
		[{
			date: '20.07.2020',
			distance: 10.2
		},
		{
			date: '19.07.2020',
			distance: 9.4
		},
		{
			date: '21.07.2020',
			distance: 12.7
		}]
	)

	const [form, setForm] = useState(
		{
			date: '',
			distance: ''
		}
	)
		
	const handleData = (form) => {
		setData(data => {
			let result = data.slice()
			
			const indexExists = result.findIndex(item => {
				return item.date === form.date
			})

			if (indexExists !== -1) {
				result[indexExists].distance = Number(result[indexExists].distance) +  Number(form.distance)
				return result
			} else {
				result = [...result, form]
				return sortDate(result)
			}		
		})
	}

	const handleRemove = (item) => {
		setData(data => {
			return data.filter(itemData => itemData.date !== item.date)
		})
	}

	const handleFormChange = ({ target }) => {
		const {name, value} = target;
		setForm(prevForm => ({...prevForm, [name]: value}))
	}
		
	const submitForm = (e) => {
		e.preventDefault();
		if (!!validator(form)) {
			alert(validator(form))
		} else {
			handleData(form); 
			setForm(() => ({date: '', distance: ''}))
		}
	}

	const handleItemEdit = (item) => {
		handleRemove(item)
		setForm(() => item)
	}

	return (
		<div className="traninig-block">
			<TrainingForm onInputForm={handleData} onFormChange={handleFormChange} form={form} onSubmitForm={submitForm}/>
			<TrainingList onItemEdit={handleItemEdit} onRemoveItem={handleRemove} items={data}/>
		</div>
	)
}

export default TrainingBlock