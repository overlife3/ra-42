import { useState } from "react"
import DropdownList from "./DropdownList"

function Dropdown() {
	const [openList, setOpenList] = useState(false)
	const handleOpenList = () => {
		setOpenList((openList) => !openList) //попробовать убрать стрелочную функцю 
	}

	return (
		<div className="dropdown">
			<button className="btn" onClick={handleOpenList}>
				<span>Account Settings</span>
        <i className="material-icons">public</i>
			</button>
			<DropdownList open={openList} />
		</div>
	)
}

export default Dropdown