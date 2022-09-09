function Item({ item }) {

	const getClassItemQuantily = () => {
		if (item.quantity <= 10) {
			return "level-low"
		} else if(item.quantity <= 20) {
			return "level-medium"
		}

		return "level-high"
	}

	const getTextItemPrice = () => {
		if (item.currency === 'USD') {
			return '$' + item.price	
		} else if (item.currency === 'EUR') {
			return '€' + item.price
		}

		return item.price + " " + item.currency  	
	}

	return (	
			<div className="item">
				<div className="item-image">
					<a href={item.url}>
						{
							item.img ? <img src={item.img} alt={item.img}/> : ''
						}
					</a>
				</div>
				<div className="item-details">
					<p className="item-title">{item.title}</p>
					<p className="item-price">{getTextItemPrice()}</p>
					<p 
						className={"item-quantity " + 
							getClassItemQuantily()}>
							{
								item.quantity + ' left'
							}
					</p>
				</div>
			</div>
	)
}

export default Item