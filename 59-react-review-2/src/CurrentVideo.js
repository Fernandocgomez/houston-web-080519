import React from 'react';

export class CurrentVideo extends React.Component {

    render(){
        if(this.props.currentVideo == null){
            return <p>Please select a video...</p>
        } else {
            return <iframe src={`https://www.youtube.com/embed/${this.props.currentVideo.id.videoId}`} />
        }
    }

}