// рклама

import React from "react";
import classNames from 'classnames'

export function Advertisement(props) {
	const {href = '#', className, url, ...restProps} = props
	const classNameCp = classNames('advertisement', className)

	return (
		<div {...restProps} className={classNameCp}>
			<a href={href}>
				<img src={url} alt={url} />
			</a>
		</div>
	)
}
