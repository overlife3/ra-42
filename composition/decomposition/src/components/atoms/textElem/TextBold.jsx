import React from "react";
import classNames from 'classnames'

export function TextBold(props) {
	const {children, className, ...restProps} = props
	const classNameCp = classNames('text-bold', className)

	return (
		<span {...restProps} className={classNameCp}>
			{children}
		</span>
	)
}
