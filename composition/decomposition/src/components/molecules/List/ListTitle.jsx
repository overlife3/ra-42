// готовый список для вывода списка linkTitle

import React from "react";
import classNames from 'classnames'
import { LinkTitle } from "../../atoms/Link/LinkTitle";

export function ListTitle(props) {
	const {data, className, ...restProps} = props
	const classNameCp = classNames('list-title', className)

	return (
		<ul {...restProps} className={classNameCp}>
			{data.map((item, index) => {
				return (
					<li key={index} >
						<LinkTitle href={item.url} className={item.isActive ? 'active' : ''}>{item.text}</LinkTitle>
					</li>
				)
			})}
		</ul>
	)
}
