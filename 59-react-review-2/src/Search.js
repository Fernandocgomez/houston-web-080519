import React, { Component } from 'react';
export class Search extends Component {

    render() {
        return (
            <div>
                <label>Search: </label>
                <input 
                    type="text" 
                    value={this.props.value} 
                    onChange={this.props.onChange} 
                />
                <input type="submit" onClick={() => this.props.onSubmit(this.props.value) } />
            </div>
        );
    }
}