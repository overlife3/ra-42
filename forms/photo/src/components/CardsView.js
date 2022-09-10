function CardsView({ dataUrl, onRemove }) {
	return (
		<div className="cards-view">
			{dataUrl.map(obj => {
				return (
					<div className="card" key={obj.id}>
						<div className="card__close" onClick={() => onRemove(obj)}>X</div>
						<img src={obj.url} alt={obj.url}/>
					</div>
				)
			})}
		</div>
	)
}

export default CardsView