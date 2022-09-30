export default function validTime(arr) {
	const [hours, minutes, seconds] = arr
	let hoursRes = hours
	if (hours >= 24) {
		hoursRes = hours - 24
	} else if (hours <= 0) {
		hoursRes = hours + 24
	}

	const valid = (num) => {
		if (num < 10) {
			return '0' + num
		}
		return num
	}
	
	return valid(hoursRes) + ':' + valid(minutes) + ':' + valid(seconds)
}