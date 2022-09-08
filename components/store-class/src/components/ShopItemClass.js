import React from 'react';
import PropTypes from 'prop-types';


class ShopItemClass extends React.Component {
	render() {
		const props = this.props.item
		return (
			<div className="main-content">
				<h2>{props.brand}</h2>
				<h1>{props.title}</h1>
				<h3>{props.description}</h3>
				<div className="description"> {props.descriptionFull} </div>
				<div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
				<div className="divider"></div>
				<div className="purchase-info">
					<div className="price">{props.currency + props.price}.00</div>
					<button>Добавить в корзину</button>
				</div>
			</div>
		)
	}
}

ShopItemClass.propTypes = {
	item: PropTypes.object,
}

export default ShopItemClass;