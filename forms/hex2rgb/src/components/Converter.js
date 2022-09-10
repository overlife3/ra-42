import { useState } from 'react'
import getRgbFromNex from '../utils/getRgbFromNex'

function Converter() {
	const [rgbText, setTextRgb] = useState('...')
	const [formValue, setForm] = useState(
		{
			value: '#'
		}
	)
	const [bgc, setBackgroundColor] = useState('#9921ff')

	const handleValueChange = ({target}) => {
		const {value} = target;
		if (value === '') {
			setForm(() => ({value: "#"}))
		} else if (value.length <= 7) {
			setForm(() => ({value: value}))
			setTextRgb('...')
		}
		
		if (value.length === 7) {
			if (/#[a-f0-9]{6}/.test(value)) {
				setTextRgb(() => getRgbFromNex(value))
				setBackgroundColor(() => value)
			} else {
				setTextRgb(() => 'Ошибка!')
			}
		}
	}

	return (
		<div className="converter" style={{backgroundColor: bgc}}>
			<form>
				<input type="text" value={formValue.value} onChange={handleValueChange}/>
				<div className="rgbText" >{rgbText}</div>
			</form>
		</div>
	)
}

export default Converter