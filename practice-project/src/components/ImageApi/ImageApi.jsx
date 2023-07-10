import React, { Component } from 'react'

export default class ImageApi extends Component {

  render() {
    return (
      <div className='main-container'>
        <div className='child-container'>
        <input type="text"  onChange={(e) => this.handleChange(e.target.value)}/>
        <div>hi</div>
        </div>
      </div>
   
    )
  }
}
// 21c52fdd78d8bda4bcb6af63df51d6a6
//f4ca7c9a8059c487
//https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1
