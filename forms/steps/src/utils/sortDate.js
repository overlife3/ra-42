import compareDate from "./compareDate"

export default function sortDate(data) {
	let result = data.slice()
	result.sort((a, b) => {
		return compareDate(a.date, b.date)
	})
	return result
}