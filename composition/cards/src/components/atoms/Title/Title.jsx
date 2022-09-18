import React from "react"
import classNames from 'classnames'

export function Title(props) {
	const {title = "Card title", className, size = 1, ...restProps} = props 
	const classNameCp = classNames('card-title', className)

	const Component = 'h' + size; 

	return (
		<Component {...restProps} className={classNameCp}>{title}</Component>
	)
}