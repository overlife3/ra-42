// для вывода серого текста 

import React from "react";
import classNames from 'classnames'

export function TextSub(props) {
	const {children, className, ...restProps} = props
	const classNameCp = classNames('sub-text', className)

	return (
		<span {...restProps} className={classNameCp}>{children}</span>
	)
}
