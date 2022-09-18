// готовый список для вывода списка ссылок с иконками

import React from "react";
import classNames from 'classnames'
import { LinkWithIcon } from "../../atoms/Link/LinkWithIcon";

export function ListWithIcons(props) {
	const {data, className, ...restProps} = props
	const classNameCp = classNames('list', className)

	return (
		<ul {...restProps} className={classNameCp}>
			{data.map((item, index) => {
				return 	<li key={index}>
									<LinkWithIcon icon={item.icon} href={item.url}>{item.text}</LinkWithIcon>
								</li>
			})}
		</ul>
	)
}
