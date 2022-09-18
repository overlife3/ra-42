// для правильной расстановки его дочерних елементов

import React from "react";
import classNames from 'classnames'

export function BlockHeader(props) {
	const {children, className, ...restProps} = props
	const classNameCp = classNames('block-header', className)

	return (
		<div {...restProps} className={classNameCp}>
			{children}
		</div>
	)
}
