function ClickWindow({ onSelect }) {
	return (
		<form className="click-window">
			<div className="above-block" >Click to select</div>
			<input type="file" onChange={onSelect} accept="image/*" />
		</form>
	)
}

export default ClickWindow