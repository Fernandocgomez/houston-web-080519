import React from 'react'
import { VideoCard } from './VideoCard'

export class SideBar extends React.Component {

    render(){
        return (
            <div>
                {this.props.videos.map( video => (
                    <VideoCard 
                        setSelectedVideo={this.props.setSelectedVideo}
                        key={video.id.videoId} 
                        video={video} 
                    />
                ))} 
            </div>
        )
    }


}