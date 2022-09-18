import { Image } from './components'
import { Link } from './components'
import { Paragraph } from './components'
import { Title } from './components'

import { CardBody } from './components'

import { Card } from './components'

function App() {
	return (
		<>
			<Card>
				<Image url="./" />
				<CardBody>
					<Title size="5" title="Card title"></Title>
					<Paragraph>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</Paragraph>
					<Link href="#" className='btn-primary'></Link>
				</CardBody>
			</Card>
	
			<Card>
			<CardBody>
				<Title size="5" title="Special title treatment"></Title>
				<Paragraph>
					Some quick example text to build on the card title and make up the bulk of the card's content.
				</Paragraph>
				<Link href="#" className='btn-primary'></Link>
			</CardBody>
			</Card>
		</>
	)
}

export default App