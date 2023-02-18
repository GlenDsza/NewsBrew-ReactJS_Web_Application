import React, { Component } from 'react'
import spinner from './spinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className="my-2" width='75' height='75' src={spinner} alt="loading" />
      </div>
    )
  }
}

export default Spinner
