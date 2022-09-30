export default function validTimeZone(str) {
	const [hours, minutes] = str.split(':').map(item => Number(item))
	if (hours < 0) {
		return [hours, -1 * minutes] 
	}
	return [hours, minutes]
}