import React from 'react'

export class MainContent extends React.Component {

    render(){
        if(this.props.selectedVideo == null){
            return <h1>Please Selected a Video...</h1>
        } else {
            return (
                <iframe src={`https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`} />
            )
        }
    }


}