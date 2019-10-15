import React, { Component } from 'react';
export class VideoPlayer extends Component {
    render() {
        if(!this.props.id) return <p>Please Select a Video</p>
        return (
            <div>
                <iframe src={`https://www.youtube.com/embed/${this.props.id.videoId}`}></iframe>
            </div>
        );
    }
}