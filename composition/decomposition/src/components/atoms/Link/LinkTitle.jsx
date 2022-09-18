// Название блока, и другие выделенные жирным шрифтом ссылки

import React from "react";
import classNames from 'classnames'

export function LinkTitle(props) {
	const {href, children, className, ...restProps} = props
	const classNameCp = classNames('link', 'link-title', className)

	return (
		<a {...restProps} className={classNameCp} href={href}>{children}</a>
	)
}
