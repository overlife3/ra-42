export default function validator(form) {
	let message = ''
	if (!(form.date.length === 10 && /\d\d.\d\d.\d{4}/.test(form.date))) {
		message += 'Введите дату правильно\n'
	}
	if (form.distance === '' || (Number(form.distance) !== 0 && !(Number(form.distance)))) {
		message += "Введите дистанцию правильно"
	}

	return message
}