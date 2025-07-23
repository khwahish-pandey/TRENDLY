import React, { Component } from 'react'
import Search from './Search.gif'

export default class rotator extends Component {
  render() {
    return (
      <div className='text-centre'>
       <img src={Search} alt='rotator'></img>
      </div>
    )
  }
}
