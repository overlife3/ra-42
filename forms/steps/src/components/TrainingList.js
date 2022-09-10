function TrainingList({ items, onRemoveItem, onItemEdit }) {
	return (
		<table>
			<thead>
				<tr>
					<td>Дата (ДД.ММ.ГГ)</td>
					<td>Пройдено км</td>
					<td>Действия</td>
				</tr>
			</thead>
			<tbody>
				{items.map(item => {
					return (
						<tr key={item.date}>
							<td>{item.date}</td>
							<td>{item.distance}</td>
							<td className="item-action">
								<div onClick={() => onRemoveItem(item)}>✘</div>
								<div onClick={() => onItemEdit(item)}>✎</div>
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default TrainingList 