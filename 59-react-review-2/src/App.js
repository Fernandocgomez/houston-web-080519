import React, { Component } from "react";
import { keys } from "./keys";
import { CurrentVideo } from "./CurrentVideo";
import { SearchBar } from "./SearchBar";
import { VideoCollection } from "./VideoCollection";


class App extends Component {
  
  state = {
    searchTerm: '',
    videos: [],
    currentVideo: null
  }

  setSearchTerm = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm
    })
  }

  setCurrentVideo = currentVideo => {
    this.setState({
      currentVideo: currentVideo
    })
  }

  getVideos = () => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=${keys.API_KEY}&q=${this.state.searchTerm}&type=video`)
      .then(response => response.json())
      .then( videos => this.setState({
        currentVideo: videos.items[0],
        videos: videos.items
      }))
  }

  render() {
    console.log(this.state.videos)
    return (
      <div>
        <SearchBar 
          getVideos={this.getVideos}
          searchTerm={this.state.searchTerm} 
          setSearchTerm={this.setSearchTerm}
        />
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 3 }}>
            <CurrentVideo currentVideo={this.state.currentVideo} />
          </div>
          <div style={{ flex: 1 }}>
            <VideoCollection 
              setCurrentVideo={this.setCurrentVideo}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
