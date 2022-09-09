import Star from "./Star"

function Stars({ count }) {
	let counter = 0
	return (
		<ul className="card-body-stars u-clearfix">
			{
				count <= 5 ? Array(count).fill(1).map(() => <Star key={counter++}/>) : ''
			}
		</ul>
	)
} 

Stars.defaultProps = {
	count: 4
}

export default Stars