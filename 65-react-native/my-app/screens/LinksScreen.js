import React from 'react';
import { TouchableOpacity, Text } from 'react-native'
import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions'

const { front, back } = Camera.Constants.Type

// const front = Camera.Constants.Type.front
// const back = Camera.Constants.Type.back


export default class LinksScreen extends React.Component {

  state = {
    showCamera: false,
    type: back
  }

  componentDidMount(){
      Permissions.askAsync(Permissions.CAMERA)
        .then( (permission) => {
          if(permission.status == 'granted'){
            this.setState({ showCamera: true })
          }
        })
  }  

  flipCamera = () => {
    this.setState({ 
      type: this.state.type === back ? front : back 
    })
  }

  render(){
    return (
        <TouchableOpacity style={{ backgroundColor: 'red', flex: 1 }} onPress={this.flipCamera}>
          { this.state.showCamera 
              ?
            <Camera style={{ flex: 1}} type={this.state.type}></Camera>
              :
              null
          }
          <Text>Hi</Text>
        </TouchableOpacity>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Links',
};