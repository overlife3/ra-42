import React from "react";
import { useSelector } from "react-redux"

export function ViewPhotos() {
	const arr = useSelector(state => state.photos)

	return (
		<div className="view-photos">
			<div className="prev-photo">
				{
					arr[arr.length - 2] ? <img src={arr[arr.length - 2].url} alt={arr[arr.length - 2].url} /> : null
				}
				
			</div>
			<div className="new-photo">
				{
					arr[arr.length - 1] ? <img src={arr[arr.length - 1].url} alt={arr[arr.length - 1].url} /> : null
				}
			</div>
			<div className="other-photos">
				{
					arr.map((item, index, arr) => {
						if (index === arr.length - 1 || index === arr.length - 2) 
							return null
						
						return (
							<img key={item.id} src={item.url} alt={item.url} />
						)
					}) 
				}
			</div>
		</div>
	)
}