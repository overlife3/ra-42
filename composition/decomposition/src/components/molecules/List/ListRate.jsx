// готовый список для вывода курса валют и тд и тп

import React from "react";
import classNames from 'classnames'
import { Link } from "../../atoms/Link/Link";
import { TextSub } from "../../atoms/textElem/TextSub";
import { Text } from "../../atoms/textElem/Text";

export function ListRate(props) {
	const {data, className, ...restProps} = props
	const classNameCp = classNames('list', 'list-rate', className)

	return (
		<ul {...restProps} className={classNameCp}>
			{data.map((item, index) => {
				return 	(
					<li key={index}>
						<Link href={item.href}>{item.name}</Link>	
						<Text className="text-rate">{item.rate}</Text>
						<TextSub>{item.dif}</TextSub>	
					</li>
				)
			})}
		</ul>
	)
}
