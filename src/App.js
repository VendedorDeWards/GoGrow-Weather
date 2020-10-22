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
				for (let i = 0; i < data.cnt; i++) {
					props.push({
						name: data.list[i].name,
						temperature: data.list[i].main.temp,
						wind_speed: data.list[i].wind.speed,
						clouds: data.list[i].clouds.all
					})
				}
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