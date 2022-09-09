import Item from "./Item"

function Listing({ items }) {
	return (
		<div className="item-list">
			{items.map((elem) => {
				if (elem.state === "active") {
					const obj = {}
					obj.id = elem.listing_id 
					obj.url = elem.url 
					obj.img = elem.MainImage.url_570xN 
					obj.title = elem.title 
					obj.currency = elem.currency_code 
					obj.price = elem.price
					obj.quantity = elem.quantity
					
					return (
						<Item item={obj} />
					)
				}				
				return ""
			})}
		</div>
	)
}

Listing.defaultProps = {
	items: []
}

export default Listing