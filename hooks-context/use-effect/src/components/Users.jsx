import React, {useState, useEffect} from "react";
import List from "./List"; 
import Details from "./Details";

function Users() {
	const [listUsers, setListUsers] = useState(null)
	const [activeUserId, setActiveUserId] = useState()
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		setIsLoading(true)
		const ab = new AbortController();
		 fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json', {
			signal: ab.signal
		})
		.then(response => response.json())
		.then(res => {
			setListUsers(res)
			console.log(res)
			setIsLoading(false)
		})
		.catch(error => alert(error)) 
		return () => {
			ab.abort()
		}
	}, [])

	const handlerActiveUser = (id) => {
		setActiveUserId(id)
	}

	return (
		<div className="users">
			<List onSelectUser={handlerActiveUser} activeUser={activeUserId} users={listUsers || []} />
			{
				!isLoading && activeUserId && <Details info={listUsers.find(obj => {
					if (obj.id === activeUserId) {
						console.log(obj)
						return obj
					}
				})}/>
			}
		</div>
	)
}

export default Users