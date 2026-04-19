import React from 'react'
import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button'
import { useWeather } from './context/WeatherContext'

const App = () => {

  let weather = useWeather()

  // Search button logic
  const handleSearch = () => {
    weather.fetchData()
    weather.setSearchCity("")   // clear input
  }

  // Refresh button logic
  const handleRefresh = () => {
    weather.fetchData()   // just fetch again
  }

  return (
    <div className='app'>
      <h1>WEATHER FORECAST</h1>

      <Input />

      <Button onClick={handleSearch} value="Search" />

      <Card />

      <Button value="Refresh" onClick={handleRefresh} />

    </div>
  )
}

export default App