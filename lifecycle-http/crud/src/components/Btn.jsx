import React from "react";
import classNames from "classnames";

function Btn({className, img, onClick}) {
	const classNameEl = classNames('btn', className)
	
	return (
		<div className={classNameEl} onClick={onClick}>
			<img src={img} />
		</div>
	)
}

export default Btn