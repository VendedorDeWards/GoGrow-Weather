import React from 'react';
import Weather from "./components/weather.jsx"
import "./index.css"

export default class App extends React.Component {
	constructor() {
		super()
		this.state = {
			weather_components: []
		}
	}
	
	componentDidMount() {
		let props = [];
		fetch("https://api.openweathermap.org/data/2.5/group?id=3441575,5128581,2968815&appid=5878049896b780788588d822aa5cce0a&units=metric&mode=JSON")
			.then(res => res.json())
			.then(data => {
				data.list.forEach(element => {
					props.push({
						name: element.name,
						temperature: element.main.temp,
						wind_speed: element.wind.speed,
						clouds: element.clouds.all
					})
				})
				this.setState({
					weather_components: props.map(props => <Weather key={props.name} {...props}/>)
				})
			}).catch(e => console.log("An error ocurred while fetching openweathermap.org: " + e.message))
	}

	render() {
		return (
			<div className="App">
				<h1>GoGrow Weather</h1>
				<div className="container">
					{this.state.weather_components}
				</div>
			</div>
		)
	}
}