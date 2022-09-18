// обычная ссылка

import React from "react";
import classNames from 'classnames'

export function Link(props) {
	const {href = '#', className, children, ...restProps} = props
	const classNameCp = classNames('link', className)

	return (
		<a {...restProps} href={href} className={classNameCp}>{children}</a>
	)
}
