import ShopCard from "./ShopCard"

function CardsView({cards}) {
	let counterCard = 0
	return (
		<div className="cards-view">
			{cards.map(card => {
				return (
					<ShopCard 
						name={card.name} 
						price={card.price} 
						color={card.color} 
						img={card.img} 
						key={counterCard++}
					/>
				)
			})}
		</div>
	)
}

export default CardsView