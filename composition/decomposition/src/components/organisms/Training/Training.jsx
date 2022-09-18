// показывает объяыление яндекс сервиса

import React from "react";
import classNames from 'classnames'

import { LinkTitle } from "../../atoms/Link/LinkTitle";
import { Text } from "../../atoms/textElem/Text";

export function Training(props) { 
	const {className, ...restProps} = props
	const classNameCp = classNames('training', 'block', className)

	return (
		<div {...restProps} className={classNameCp}>
			<img src="./"/>
			<LinkTitle>Работа над ошибками</LinkTitle>
			<Text>Смотрите на Яндексе и запоминайте</Text>
		</div>
	)
}
