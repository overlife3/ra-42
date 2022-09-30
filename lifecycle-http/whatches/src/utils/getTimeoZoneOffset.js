export default function getTimeZoneOffset(hoursZone, minutesZone) {
	const date = new Date()
	
	const hours = date.getHours()
	const minutes = date.getMinutes()
	const seconds = date.getSeconds()

	const timeReg = date.getTimezoneOffset()
	const hoursReg = Math.floor(timeReg / 60)
	const minutesReg = timeReg -  hoursReg * 60

	const hours00 = hours + hoursReg
	const minutes00 = minutes + minutesReg


	const hoursRes = hours00 + hoursZone
	const minutesRes = minutes00 + minutesZone

	return [hoursRes, minutesRes, seconds]
}