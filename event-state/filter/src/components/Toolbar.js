import React, { Component } from 'react'

class Toolbar extends Component {
	render() {
		const filters = this.props.filters
		let selected = this.props.selected
		return (
			<div className="toolbar">
				{filters.map((filter) => {
					return (
						<div 
							className={"toolbar-item " + (selected === filter ? 'selected' : '')} 
							key={filter} 
							onClick={() => this.props.onSelectFilter(filter)}
						>{filter}
						</div>
					)
				})}
			</div>
		)
	}
}

export default Toolbar;