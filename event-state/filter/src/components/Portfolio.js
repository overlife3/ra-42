import React, { Component } from 'react'
import Toolbar from './Toolbar'
import ProjectList from './ProjectList';


class Portfolio extends Component {
	
	state = {
		selectedFilter: "All",
		projects: [{
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
			category: "Business Cards"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
			category: "Business Cards"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
			category: "Business Cards"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
			category: "Flayers"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
			category: "Business Cards"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
			category: "Business Cards"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
			category: "Flayers"
		}]
	};

	onSelectFilter = (filter) => { 
		const arrProject = [{
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
			category: "Business Cards"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
			category: "Business Cards"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
			category: "Business Cards"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
			category: "Flayers"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
			category: "Business Cards"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
			category: "Business Cards"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
			category: "Websites"
		}, {
			img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
			category: "Flayers"
		}];

		let projects;
		if (filter === 'All') {
			projects = arrProject.slice();
		} else {
			projects = arrProject.filter((obj) => {
				return obj.category === filter;
			})
		};
	
		this.setState({selectedFilter: filter, projects: projects});
	}

	render() {
		return (
			<div className='portfolio'>
				<Toolbar 
					filters={["All", "Websites", "Flayers", "Business Cards"]}
					selected={this.state.selectedFilter}
  				onSelectFilter={this.onSelectFilter}
					/>
				<ProjectList projects={this.state.projects} />
			</div>
		)
	}
}

export default Portfolio