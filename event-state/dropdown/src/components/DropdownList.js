import { useState } from 'react'
import DropdownItem from "./DropdownItem"

function DropdownList({open}) {
 const [items, setItems] = useState([
	{
		id: 0,
		text: 'Profile Information',
		selected: false
	},
	{
		id: 1,
		text: 'Change Password',
		selected: false
	},
	{
		id: 2,
		text: 'Become PRO',
		selected: false
	},
	{
		id: 3,
		text: 'Help',
		selected: false
	},
	{
		id: 4,
		text: 'Log Out',
		selected: false
	}
 ])
	const handleSelected = (itemId) => {
		setItems((items) => {
			const result = items.slice()
			result.forEach((elem) => {
				elem.selected = false
			})

			const indexSelItem = result.findIndex((elem) => itemId === elem.id)
			result[indexSelItem].selected = true
			
			return result
		})
 }

	return (
		<ul className={"dropdown-list" + (open ? " open" : "")}>
			{items.map((item) => {
				return (
					<DropdownItem 
						idItem={item.id} 
						selected={item.selected} 
						text={item.text} 
						onSelected={handleSelected} 
						key={item.text + item.id}
					/>	
				)
			})}
		</ul>
	)
}

export default DropdownList