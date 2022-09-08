function ShopItem({name, price, color, img}) {
	return ( 
		<div className="item">
			<img 
				className="item__img" 
				src={img} 
				alt={img}>
			</img>
			<h3 className="item__name">{name}</h3>
			<span className="item__color">{color}</span>
			<span className="tiem__price store__price">${price}</span>
			<button className="item__btn store__btn">add to card</button>
		</div>
	)
}

export default ShopItem