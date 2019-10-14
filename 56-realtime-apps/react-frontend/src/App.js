import React from 'react';
import GoogleMapReact from 'google-map-react';
import socketIo from 'socket.io-client'

const socket = socketIo('http://localhost:3001') // <-- Creates connection with the backend


class App extends React.Component {

  state = {
    reviews: []
  }

  async componentDidMount() {
    socket.emit('get-reviews')
    socket.on('reviews', reviews => {
      this.setState({ reviews })
    })
  }

  render() {
    return (
      <div className="container">
        <div style={{ height: '60vh' }}>
          <GoogleMapReact className="map" defaultCenter={{ lat: 29.7576198923993, lng: -95.36185792321558 }} zoom={15} bootstrapURLKeys={{ key: 'AIzaSyAqPyC4VMe82t3Kanfa_dEmIuZJrafuin0' }} yesIWantToUseGoogleMapApiInternals>{this.markers}</GoogleMapReact>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Rating</label>
              <input name="rating" type="number" className="form-control" />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input name="address" type="text" className="form-control" />
            </div>
            <input value="Rate Restroom"  type="submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    );
  }

  get markers(){
    return this.state.reviews.map(review => (
      <div
        style={{
          backgroundColor: 'red',
          color: 'white',
          height: 30,
          width: 30,
          textAlign: 'center',
          paddingTop: 5
        }}
        lat={review.lat}
        lng={review.lng}>
        {review.rating}
      </div>
    ))
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const ratingInput = e.target.rating;
    const addressInput = e.target.address;
    const position = await geocodeAddress(addressInput.value)
    this.setState({
      reviews: [...this.state.reviews, {
        lat: position.lat,
        lng: position.lng,
        rating: ratingInput.value
      }]
    })
    this.saveReview(ratingInput.value, position.lat, position.lng)
  }

  saveReview = (rating, lat, lng) => {
    let newReview = {
      lat: lat,
      lng: lng,
      rating: rating
    }
    socket.emit('create-review', newReview)
  }

}

function geocodeAddress(address) {
  return new Promise(resolve => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
      if (status == 'OK') {
        let lat = results[0].geometry.location.lat()
        let lng = results[0].geometry.location.lng()
        resolve({
          lat: lat,
          lng: lng
        })
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  })
}

export default App;
