import ShopItem from "./ShopItem"

function ListView({items}) {
	let counterItem = 0
	return (
		<div className="list-view">
			{items.map(item => {
				return (
					<ShopItem 
						name={item.name} 
						price={item.price} 
						color={item.color} 
						img={item.img} 
						key={counterItem++}
					/>
				)
			})}
		</div>
	)
}

export default ListView