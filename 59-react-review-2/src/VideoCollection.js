import React from 'react';
import { VideoCard } from './VideoCard';

export class VideoCollection extends React.Component {

    render() {
        return (
            <div>
                {this.props.videos.map( video => (
                    <VideoCard 
                        key={video.id.videoId}
                        setCurrentVideo={this.props.setCurrentVideo} 
                        video={video} 
                    />
                ))}
            </div>
        )
    }

}