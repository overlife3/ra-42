import React from "react";
import classNames from 'classnames'

export function Image(props) {
	const {url, className, ...restProps} = props 
	const classNameCp = classNames('card-img-top', className)


	return (
		<img {...restProps} src={url} className={classNameCp} alt={url}/>
	)
}