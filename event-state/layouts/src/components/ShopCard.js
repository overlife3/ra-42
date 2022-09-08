function ShopCard({name, price, color, img}) {
	return(
		<div className="card" >
			<h3 className="card__name">
				{name}
			</h3>
			<p className="card__color">
				{color}
			</p>
			<img 
				className="card__img" 
				src={img} 
				alt={img}>
			</img>
			<div className="card__footer">
				<div className="card__price store__price">${price}</div>
				<button className="card__btn store__btn">add to card</button>
			</div>
		</div>
	)
}

export default ShopCard