// готовая строка поиска

import React from "react";
import classNames from 'classnames'

import { ListTitle } from "../../molecules/List/ListTitle";
import { Link } from "../../atoms/Link/Link";

export function LineSearch(props) { 
	const {className, ...restProps} = props
	const classNameCp = classNames('line-search-block', 'block', className)

	const itemsLineSearch = [
		{
			url: '#',
			text: 'Видео'
		},
		{
			url: '#',
			text: 'Картинки'
		},
		{
			url: '#',
			text: 'Новости'
		},
		{
			url: '#',
			text: 'Карты'
		},
		{
			url: '#',
			text: 'Маркет'
		},
		{
			url: '#',
			text: 'Переводчик'
		},
		{
			url: '#',
			text: 'Эфир'
		},
		{
			url: '#',
			text: 'ещё'
		},
	]

	return (
		<div {...restProps} className={classNameCp}>
			<img src="./"/>
			<div>
				<ListTitle data={itemsLineSearch}></ListTitle>
				<div className="line-search">
					<form>
						<input />
						<button>Найти</button>
					</form>
				</div>
				<div>
					<span>Найдется все. Например,</span>
					<Link className='grey-text'>фаза луны сегодня</Link>
				</div>
			</div>
		</div>
	)
}
