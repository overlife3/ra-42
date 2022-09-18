// список в который можно засунуть нестандртные структуры li

import React from "react";
import classNames from 'classnames'

export function List(props) {
	const {children, className, ...restProps} = props
	const classNameCp = classNames('list', className)

	return (
		<ul {...restProps} className={classNameCp}>
			{children}
		</ul>
	)
}
