import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'
import { Camera, Permissions, DangerZone  } from 'expo' 
const { DeviceMotion } = DangerZone

export class CameraScreen extends Component {

    state ={
        hasPermission: false,
        frontFacing: false
    }

    componentDidMount(){

        DeviceMotion.addListener((data) => {
            this.setState({
                alpha: data.rotation.alpha,
                beta: data.rotation.beta,
                gamma: data.rotation.gamma
            })
        })

        Permissions.askAsync(Permissions.CAMERA)
            .then( permission => {
                this.setState({
                    hasPermission: permission.status == 'granted'
                })
            })
    }

    flipCamera = () => {
        this.setState({
            frontFacing: !this.state.frontFacing
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Button onPress={this.flipCamera} title="Flip Camera"/>
            { this.state.hasPermission && false?
                <Camera style={{ flex: 1 }} type={
                    this.state.frontFacing 
                        ? Camera.Constants.Type.front 
                        : Camera.Constants.Type.back

                } >
                </Camera>

                : 
                <Text>You did not give this app permission to access your camera. :(</Text>
            }
            <Text style={{fontSize: 30 }}>Rotation Data:</Text>
            <Text style={{fontSize: 30}}>Alpah: {this.state.alpha}</Text>
            <Text style={{fontSize: 30}}>Beta: {this.state.beta}</Text>
            <Text style={{fontSize: 30}}>Gamma: {this.state.gamma}</Text>

            </View>
        );
    }
}