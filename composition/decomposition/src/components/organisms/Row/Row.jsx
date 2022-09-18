// необходим чтобы расставить блоки на равном расстоянии друг от друга

import React from "react";
import classNames from 'classnames'

export function Row(props) { 
	const {children, className, ...restProps} = props
	const classNameCp = classNames('row', className)

	return (
		<div {...restProps} className={classNameCp}>
			{children}
		</div>
	)
}
