function IconSwitch({icon, onSwitch}) {
	return (
		<div 
			className="icon-switch material-icons" 
			onClick={() => onSwitch(icon)}
		>{icon}
		</div>
	)
}

export default IconSwitch




















/* <span class="material-symbols-outlined">
view_list
</span> 

<span class="material-symbols-outlined">
view_module
</span>*/