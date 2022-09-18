// готовая структура для вывода новостей

import React from "react";
import classNames from 'classnames'

import { BlockHeader } from "../../molecules/BlockHeader/BlockHeader";
import { ListTitle } from "../../molecules/List/ListTitle";
import { TextSub } from "../../atoms/textElem/TextSub"
import { ListWithIcons } from "../../molecules/List/ListWithIcons";
import { ListRate } from "../../molecules/List/ListRate";

export function News(props) { 
	const {data ,children, className, ...restProps} = props
	const classNameCp = classNames('news', 'block', className)

	const listTitleItems = [
		{
			url: '#',
			text: 'Сейчас в СМИ',
			isActive: true
		},
		{
			url: '#',
			text: 'в Германии',
			isActive: false
		},
		{
			url: '#',
			text: 'Рекомендуем',
			isActive: false
		}
	]

	const itemsLinkList = [
		{
			url: '#',
			icon: './',
			text: 'Путин упростил получение автомобильных номеров'
		},
		{
			url: '#',
			icon: './',
			text: 'В команде Зеленского раскрыли план реформы на Украине'
		},
		{
			url: '#',
			icon: './',
			text: 'Путин упростил получение автомобильных номеров'
		},
		{
			url: '#',
			icon: './',
			text: 'В команде Зеленского раскрыли план реформы на Украине'
		},
		{
			url: '#',
			icon: './',
			text: 'Путин упростил получение автомобильных номеров'
		}
	]

	const itemsListRate = [
		{
			href: '#',
			name: 'USD MOEX',
			rate: '63,52',
			dif: '+0,09'
		},
		{
			href: '#',
			name: 'EUR MOEX',
			rate: '70,86',
			dif: '+0,14'
		},{
			href: '#',
			name: 'НЕФТЬ',
			rate: '64,90',
			dif: '+1,63%'
		}
	]

	return (
		<div {...restProps} className={classNameCp}>
			<BlockHeader>
				<ListTitle data={listTitleItems}></ListTitle>
				<TextSub>31 июля, среда 02 32</TextSub>
			</BlockHeader>
			<ListWithIcons data={itemsLinkList}></ListWithIcons>
			<ListRate data={itemsListRate} />
		</div>
	)
}
