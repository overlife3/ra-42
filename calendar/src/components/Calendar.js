import React from 'react'
import '../css/calendar.css'
import { getArrDate } from './getArrDate'




function Calendar(props) {
	const arrNameDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	const arrNameDayAbbreviated = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
	const arrNameMonth = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
	const arrNameMonthGenitive =  ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

	const year = props.date.getFullYear();
	const month = props.date.getMonth();
	const date = props.date.getDate();
	const day = props.date.getDay();
	const arrDate = getArrDate(year, month);
	let cellCounter = 1

	return (
		<div className="ui-datepicker">
				<div className="ui-datepicker-material-header">
					<div className="ui-datepicker-material-day">{arrNameDay[day]}</div>
					<div className="ui-datepicker-material-date">
						<div className="ui-datepicker-material-day-num">{date}</div>
						<div className="ui-datepicker-material-month">{arrNameMonthGenitive[month]}</div>
						<div className="ui-datepicker-material-year">{year}</div>
					</div>
				</div>
				<div className="ui-datepicker-header">
					<div className="ui-datepicker-title">
						<span className="ui-datepicker-month">{arrNameMonth[month]}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
					</div>
				</div>
				<table className="ui-datepicker-calendar">
					<colgroup>
						<col />
						<col />
						<col />
						<col />
						<col />
						<col className="ui-datepicker-week-end" />
						<col className="ui-datepicker-week-end" />
					</colgroup>
					<thead>
						<tr>
							{arrNameDay.map((name, index) => 
								<th 
									scope="col" 
									title={name} 
									key={name}>{arrNameDayAbbreviated[index]}</th>
							)}
						</tr>
					</thead>
					<tbody>
						{arrDate.map((arrWeek, index) => {
								return (
									<tr key={cellCounter++}>
										{arrWeek.map((objDate) => {
												if (objDate.isOther) {
													return <td 
														className="ui-datepicker-other-month" 
														key={cellCounter++}>{objDate.date}</td>
												} else {
													return <td 
														className={objDate.date === date ? "ui-datepicker-today" : ''} 
														key={cellCounter++}>{objDate.date}</td>
												}
										})}
									</tr>
								);
							})
						}
					</tbody>
				</table>
		</div>
	)

}

export default Calendar;