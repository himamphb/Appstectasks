import React, { Component } from 'react'
import Image from '../Image/Image';

export default class ImageApi extends Component {
constructor(props) {
    super(props);
    this.state = {
      query: "",
      imageArray : []
    };
  }

  handleChange = (e) => {
    this.setState({
        query: e.target.value
    })
}
    getData = async () => {
    const apiKey = "21c52fdd78d8bda4bcb6af63df51d6a6";
   
    try {
      
      let response = await fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.state.query}&per_page=10&format=json&nojsoncallback=1`
      );
      let responseData = await response.json();
      let url = responseData.photos.photo.map((image) => {
        const url = {
          id: image.id,
          url: `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
        };
        return url;
      });
      this.setState({ imageArray: url ,query:""});
    } catch (err) {
      console.log(err);
    }
  };
 
  render() {
     let imageData = this.state.imageArray.map((photo) => {
      return <Image key={photo.id} link={photo.url} />;
    });
    return (
      <div className='main-container'>
        <div className='child-container'>
        <input type="text" value={this.state.query} onChange={this.handleChange}/>
        <button onClick={this.getData}>generate image</button>
        </div>
        <div className='image'>{imageData}</div>
        
      </div>
   
    )
  }
}
// 21c52fdd78d8bda4bcb6af63df51d6a6
//f4ca7c9a8059c487
//https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1
