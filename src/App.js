import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather_info';

const API_KEY = '44da3b5be0a97c850249909c4ce4fde1';

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    img: undefined,
    main: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    

    if(city) {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);
      
      let sunset = data.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        img: data.weather[0].icon,
        main: data.weather[0].main,
        error: undefined
      })
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        img: undefined,
        main: undefined,
        error: 'Введите название города'
      })
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info/>
              </div>
              <div className="col-sm-7 form">
                <Form weatherMethod={this.gettingWeather} />
                <Weather
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  pressure={this.state.pressure}
                  sunset={this.state.sunset}
                  image={this.state.img}
                  main={this.state.main}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default App;