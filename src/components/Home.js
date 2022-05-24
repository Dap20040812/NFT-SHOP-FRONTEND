import React, {Component} from 'react'
import Categories from './Categories'
import Footer from './Footer'
import Products from './Products'
import Slider from './Slider'

class Home extends Component{
  render() {
  return (
    <div>
        <Slider />
        <Categories />
        <Products />
        <Footer />
    </div>
  )
  }
}

export default Home