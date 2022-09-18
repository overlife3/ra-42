import React from "react";
import classNames from 'classnames'

export function Card(props) {
	const {children, className = '', ...restProps} = props 
	const classNameCp = classNames('card', className)

	return (
		<div {...restProps} className={classNameCp}>{children}</div>
	)
}