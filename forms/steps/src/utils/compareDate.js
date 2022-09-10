export default function compareDate(a, b) {
	const [date1, month1, year1] = a.split('.')
	const [date2, month2, year2] = b.split('.')

	if (year1 > year2) {
		return -1
	} else if (year1 < year2) {
		return 1
	}	else {
		if (month1 > month2) {
			return -1
		} else if (month1 < month2) {
			return 1
		} else {
			if (date1 > date2) {
				return -1
			} else if (date1 < date2) {
				return 1
			} else {
				return 0
			}
		}
 	}
	
	
	
	
	// functions ---------------

}