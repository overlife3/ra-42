function DropdownItem({selected, text, onSelected, idItem}) {
	console.log(selected)
	return (
		<li className={selected ? 'selected' : ''} onClick={() => {onSelected(idItem)}}>
			<a href="#!">{text}</a>
		</li>
	)
}

export default DropdownItem