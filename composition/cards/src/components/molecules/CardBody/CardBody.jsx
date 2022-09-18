import React from "react";
import classNames from 'classnames'

export function CardBody(props) {
	const {children, className, ...restProps} = props 
	const classNameCp = classNames('card-body', className)

	return (
		<div {...restProps} className={classNameCp}>{children}</div>
	)
}