import React, { useState, useEffect } from "react";

function Details(props) {
	const [userInfo, setInfo] = useState()
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		const ab = new AbortController();
		setIsLoading(true)
		fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.info.id}.json`, {
			signal: ab.signal
		})
		.then(response => response.json())
		.then(res => {
			setInfo(res)
			console.log(res)
			setIsLoading(false)
		})
		.catch(error => alert(error)) 
		return () => {
			ab.abort()
		}
	}, [props.info.id])

	return (
		 <>
		 	{!isLoading && userInfo && <div className="details"> 
				<img src={userInfo.avatar} alt={userInfo.avatar}></img>
				<ul>
					<li className="name">
						<h3>{userInfo.name}</h3>
					</li>
					<li>City: {userInfo.details.city}</li>
					<li>Company: {userInfo.details.company}</li>
					<li>Position: {userInfo.details.position}</li>
				</ul>		
			</div>}
		 </>
		 
	)
}

export default Details