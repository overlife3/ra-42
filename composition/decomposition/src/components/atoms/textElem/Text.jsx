// для вывода текста

import React from "react";
import classNames from 'classnames'

export function Text(props) {
	const {children, className, ...restProps} = props
	const classNameCp = classNames('text', className)

	return (
		<div {...restProps} className={classNameCp}>{children}</div>
	)
}
