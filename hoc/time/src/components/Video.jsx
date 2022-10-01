import React from "react"
import DateTimePretty from "./DateTimePretty"

export default function Video(props) {
	return (
			<div className="video">
					<iframe src={props.url} allow="autoplay; encrypted-media" allowfullscreen></iframe>
					<DateTimePretty date={props.date} />
			</div>
	)
}