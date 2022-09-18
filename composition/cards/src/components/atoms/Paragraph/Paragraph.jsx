import React from "react";
import classNames from 'classnames'

export function Paragraph(props) {
	const {children, className, ...restProps} = props 
	const classNameCp = classNames('card-text', className)

	return (
		<p {...restProps} className={classNameCp}>{children}</p>
	)
}