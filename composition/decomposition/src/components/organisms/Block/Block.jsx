// блок, служит для разделения структуры страницы на блоки

import React from "react";
import classNames from 'classnames'
import { LinkTitle } from "../../atoms/Link/LinkTitle";

export function Block(props) {
	const {title, className, children, ...restProps} = props
	const classNameCp = classNames('block', className)

	return (
		<div {...restProps} className={classNameCp}>
			<LinkTitle>{title}</LinkTitle>	
			{children}
		</div>
	)
}
