import React from 'react';

export class VideoCard extends React.Component {

    render(){
        return (
            <div onClick={() => this.props.setCurrentVideo(this.props.video)} >
                <h3>{this.props.video.snippet.title}</h3>
                <p>{this.props.video.snippet.description}</p>
            </div>
        )
    }

}