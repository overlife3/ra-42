import React, { useState, useEffect } from "react";
import getTimeZoneOffset from "../utils/getTimeoZoneOffset";
import validTime from "../utils/validTime";
import validTimeZone from "../utils/validTimeZone";

function CardWatch({ nameZone, onRemoveItem, id, timeZone }) {
	const [time, setTime] = useState()
	const [updated, setUpdated] = useState()

	const getTime = () => {
		const timeOffset = getTimeZoneOffset(...validTimeZone(timeZone))
		const time = validTime(timeOffset)
		setUpdated(time)
		setTime(time)
		console.log(time)
	}

	useEffect( () => {
		getTime()
	}
	, [])

	useEffect(() => {
		const timeout = setTimeout(() => {
			getTime()
		}, 1000)

		return () => clearTimeout(timeout)
	}
	, [updated])



	return (
		<div className="card-watch">
			<p>{nameZone}</p>
			<div className="watch">
				{time}
			</div>
			<div className="btn-remove" onClick={() => onRemoveItem(id)}>
				X
			</div>
		</div>
	)
}

export default CardWatch