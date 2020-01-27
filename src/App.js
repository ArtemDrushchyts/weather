import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather_info';

const API_KEY = '44da3b5be0a97c850249909c4ce4fde1';

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);

    this.setState({
      
    })
  }

  render() {
    return (
      <div>
        <Info/>
        <Form weatherMethod={this.gettingWeather} />
        <Weather/>
      </div> 
    )
  }
}

export default App;