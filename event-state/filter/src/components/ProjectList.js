import { Component } from 'react'

class ProjectList extends Component {
	render() {
		const arrProject = this.props.projects

		return (
			<div className="projectList">
				<div className="col">
					{arrProject.map((obj, index) => {
						if (arrProject[3*index]) {
							return (
								<img 
									src={arrProject[3*index].img} 
									alt={arrProject[3*index].img} 
									key={arrProject[3*index].img}>
								</img>
							)
						} 
						return undefined
					})}
				</div>
				
				<div className="col">
					{arrProject.map((obj, index) => {
						if (arrProject[3*index + 1]) {
							return (
								<img 
									src={arrProject[3*index + 1].img} 
									alt={arrProject[3*index + 1].img} 
									key={arrProject[3*index + 1].img}>
								</img>
							)
						}
						return undefined
					})}
				</div>

				<div className="col">
					{arrProject.map((obj, index) => {
						if (arrProject[3*index + 2]) {
							return (
								<img 
									src={arrProject[3*index + 2].img} 
									alt={arrProject[3*index + 2].img} 
									key={arrProject[3*index + 2].img}>
								</img>
							)
						}
						return undefined
					})}
				</div>
			</div>
		)
	}
}

export default ProjectList