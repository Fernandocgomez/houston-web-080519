import React from 'react';

export class SearchBar extends React.Component {

    render(){
        return (
            <div>
                <input 
                    onChange={e => this.props.setSearchTerm(e.target.value)}
                    value={this.props.searchTerm} 
                    type="text" 
                    placeholder="Search..." 
                />
                <button onClick={e => this.props.getVideos()} >Search</button>
            </div>
        )
    }

}