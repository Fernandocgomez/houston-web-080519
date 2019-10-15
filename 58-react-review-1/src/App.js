import React, { Component } from "react";
import { keys } from "./keys";
import { SearchBar } from "./SearchBar";
import { MainContent } from "./MainContent";
import { SideBar } from "./SideBar";

class App extends Component {
  
  state = {
    videos: [],
    selectedVideo: null,
    search: ''
  }

  handleSearch = (search) => {
    this.setState({ 
      search: search
    })
  }

  passVideoList = videos => {
    this.setState({
      videos: videos.items
    })
  }

  setSelectedVideo = video => {
    this.setState({
      selectedVideo: video
    })
  }

  render() {
    return (
      <div>
        <SearchBar 
          search={this.state.search} 
          handleSearch={this.handleSearch} 
          passVideoList={this.passVideoList} 
        />
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 3 }}>
            <MainContent
              selectedVideo={this.state.selectedVideo}
            />
          </div>
          <div style={{ flex: 1}}>
            <SideBar 
              setSelectedVideo={this.setSelectedVideo} 
              videos={this.state.videos} 
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
