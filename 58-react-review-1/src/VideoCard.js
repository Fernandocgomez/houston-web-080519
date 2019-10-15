import React from 'react'

export class VideoCard extends React.Component {

    render(){
        return (
            <div onClick={(e) => this.props.setSelectedVideo(this.props.video)}>
                <h1>{this.props.video.snippet.title}</h1>
                <p>{this.props.video.snippet.description}</p>
            </div>
        )
    }


}