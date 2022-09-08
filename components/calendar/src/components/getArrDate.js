export function getArrDate(year, month) {
	const lastDateMonth = new Date(year, month + 1, 0).getDate();
	const dayLastDatePrevMonth = new Date(year, month, 0).getDay() ;
	const result = [];
	const arrObj = [];
	const countWeek = Math.ceil((lastDateMonth + dayLastDatePrevMonth) / 7);
	const arrIndexDateIsOhter = createArrIndexDateIsOhter(dayLastDatePrevMonth, lastDateMonth, countWeek * 7 );
	
	let day = 1;
	for (let i = 1; i <= countWeek; i++) {
		const arrWeek = [];
		
		for (let j = 0; j < 7; j++) {
			const date = new Date(year, month, day - dayLastDatePrevMonth).getDate();	
			const objDate = {};

			objDate.date = date;
			objDate.isOther = false;			
			arrWeek.push(objDate);
			arrObj.push(objDate);

			day++;
		}	
		result.push(arrWeek);
	}
	
	arrObj.forEach((obj, index) => {
		for (let indexDateIsOhter of arrIndexDateIsOhter) {
			if (index === indexDateIsOhter) {
				obj.isOther = true;
			}
		}
	})
	return result;
	
	// functions ---------------------------------------------------------------

	function createArrIndexDateIsOhter(dayLastDatePrevMonth, countDateMonth, countDateCalendar) {
		const result = [];	
		const prevDateIsMonth = dayLastDatePrevMonth;
		const nextDateIsMonth = dayLastDatePrevMonth + countDateMonth;
		for (let i = 0; i < countDateCalendar; i++) {
			if (i < prevDateIsMonth || i >= nextDateIsMonth) {
				result.push(i);
			}
		}			
		return result;
	}

}