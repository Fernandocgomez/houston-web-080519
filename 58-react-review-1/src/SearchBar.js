import React from 'react'
import { keys } from "./keys";

export class SearchBar extends React.Component {

    handleSearch = () => {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${this.props.search}&type=video`)
            .then( res => res.json())
            .then( result => this.props.passVideoList(result) )

    }

    render(){
        return (
            <div>
                <input 
                    value={this.props.search} 
                    type="text" 
                    placeholder="Search..."
                    onChange={(e) => this.props.handleSearch(e.target.value) }
                />
                <button onClick={this.handleSearch}>Submit</button>
            </div>
        )
    }


}