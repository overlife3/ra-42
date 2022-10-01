import React, { useState, useEffect } from "react"

function DateTime(props) {
	return (
		<p className="date">{props.date}</p>
	)
}

function withTimePretty() {
	return function (Component) {
		const Func = function (props) {
			const dif = () => {
				return new Date().getTime() - new Date(props.date).getTime()
			}
			const [time, setTime] = useState()


			function handlerTime() {
				if (dif() < 60 * 60 * 1000) {
					setTime('12 минут назад')
				} else if (dif() < 24 * 60 * 60 * 1000) {
					setTime('5 часов назад')
				} else {
					const difDate = Math.ceil(dif() / (24 * 60 * 60 * 1000))
					setTime(difDate + ' дней назад')
				}
			}

			useEffect(() => {
				handlerTime()
			}, [])

			useEffect(() => {
				setTimeout(() => handlerTime(), 1000)
			}, [dif()])

			return <Component {...props} date={time} />
		}
		
		const componentName = Component.displayName || Component.name || 'Component';
		Func.displayName = `WithData${componentName}`;
		
		return Func
	}
}

const dateTimeDecorator = withTimePretty()
const DateTimePretty = dateTimeDecorator(DateTime)


export default DateTimePretty