import { News } from "./components/organisms/News/News"
import { Row } from "./components/organisms/Row/Row"
import { Training } from "./components/organisms/Training/Training"
import { LineSearch } from "./components/organisms/LineSearch/LineSearch"
import { Advertisement } from "./components/atoms/Advertisement"
import { Block } from "./components/organisms/Block/Block"
import { List } from "./components/molecules/List/List"
import { Text } from "./components/atoms/textElem/Text"
import { Link } from "./components/atoms/Link/Link"
import { TextSub } from "./components/atoms/textElem/TextSub"
import { LinkWithIcon } from "./components/atoms/Link/LinkWithIcon"

function App() {
	const itemsVisited = [
		{
			url: '#',
			service: 'Недвижимость',
			text: ' - о сталинках'
		},
		{
			url: '#',
			service: 'Маркет',
			text: ' - люстры и светильники'
		},
		{
			url: '#',
			service: 'Авто.ру',
			text: '- привод 4X4 до 500 000'
		}
	]

	const itemsTelegid = [
		{
			url: '#',
			time: '02:00',
			text: 'THT.Best',
			service: 'THT International'
		},
		{
			url: '#',
			time: '02:15',
			text: 'Джинглики',
			service: 'Карусель INT'
		},
		{
			url: '#',
			time: '02:25',
			text: 'Наедине со всеми',
			service: 'Первый'
		}
	] 

	const itemsEther = [
		{
			url: '#',
			icon: './',
			text: 'Управление как искусство',
			service: 'Успех',	
		},
		{
			url: '#',
			icon: './',
			text: 'Ночь. Мир в это время',
			service: 'earthTV',	
		},
		{
			url: '#',
			icon: './',
			text: 'Андрей Возн...',
			service: 'Совершенно секретно',	
		}
	]

	return (
		<>
			<Row>
				<News></News>
				<Training></Training>
			</Row>
			<LineSearch />
			<Advertisement href="#" url="./" />
			<Row>
				<Block className="block-visited" title='Посещаемое'>
					<List className="list-visited">
						{itemsVisited.map((item, index) => {
							return (
								<li key={index}>
									<Link className="services" href={item.url} >{item.service}</Link>
									<Text >{item.text}</Text>
								</li>
							)
						})}
					</List>
				</Block>
				<Block className="block-telegid" title='Телепрограмма'>
					<List className="list-telegid">
						{itemsTelegid.map((item, index) => {
							return (
								<li key={index}>
									<Text>{item.time}</Text>
									<Link href={item.url} >{item.text}</Link>
									<TextSub>{item.service}</TextSub>
								</li>
							)
						})}
					</List>
				</Block>
				<Block className="block-ether" title='Эфир'>
					<List className="list-ether">
						{itemsEther.map((item, index) => {
								return (
									<li key={index}>
										<LinkWithIcon icon={item.icon} href={item.url}>{item.text}</LinkWithIcon>
										<TextSub>{item.service}</TextSub>
									</li>
								)
						})}
					</List>
				</Block>
			</Row>
		</>
	)
}

export default App