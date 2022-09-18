import React from "react";
import classNames from 'classnames'

export function LinkWithIcon(props) {
	const {href, icon, children, className, ...restProps} = props
	const classNameCp = classNames('link', 'link-with-icon', className)

	return (
		<div className={classNameCp}>
			<img src={icon} alt={icon}/>
			<a {...restProps} href={href}>{children}</a>
		</div>
	)
}
