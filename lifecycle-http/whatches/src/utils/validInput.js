export default function validInput(value) {
	let error 
	if (!/\d\d:\d\d/.test(value) && value.length !== 5) {
		error = 'Введите смещение в формате ЧЧ:ММ'
	}
	if (!/-?\d\d:\d\d/.test(value) && value.length !== 6) {
		error = 'Введите смещение в формате ЧЧ:ММ'
	}
	return error
}