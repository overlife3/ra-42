import React from "react";
import classNames from 'classnames'

export function Link(props) {
	const {children = "Go somewhere", className, href ="#", ...restProps} = props 
	const classNameCp =  classNames('btn', className)

	return (
		<a {...restProps} href={href} className={classNameCp}>{children}</a>
	)
}