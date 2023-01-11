import React, { Component } from 'react'
import HornedBeast from './HornedBeast'

export default class Main extends Component {
  render() {
    return (
      <div>
        <h3>Hello Beasts</h3>
        <article>
          <p>John</p>
        </article>
        <HornedBeast title="Uniwhal" description="A unicorn and a narwhal nuzzling their horns" imageURL="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"/>

        <HornedBeast title="Rhino" description="Parent rhino with two babies" imageURL="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"/>
        </div>
    )
  }
}
