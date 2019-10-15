import React, { Component } from 'react';
export class VideoCard extends Component {
    render() {
        return (
            <div onClick={this.props.onClick}>
                <img src={this.props.snippet.thumbnails.default.url}></img>
                <h4>{this.props.snippet.title}</h4>
                <p>{this.props.snippet.description}</p>
            </div>
        );
    }
}