import React, { Component } from 'react';
import { VideoCard } from './VideoCard';
export class SuggestedList extends Component {
    render() {
        return (
            <div>
                {this.props.videos.map( video => (
                    <VideoCard {...video} onClick={() => this.props.onVideoSelected(video)} />
                ))}
            </div>
        );
    }
}