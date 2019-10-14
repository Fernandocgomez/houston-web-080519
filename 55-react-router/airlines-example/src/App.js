import React from 'react';
import { PassengerIndex } from './PassengerIndex/PassengerIndex';
import { PassengerShow } from './PassengerShow/PassengerShow';

class App extends React.Component {

  state= {
    currentPage: 'index',
    id: 0
  }

  switchPage = (page, id) => {
    this.setState({ 
      currentPage: page,
      id: id
    })
  }

  render() {
    let CurrentPage;
    if(this.state.currentPage === 'index'){
      CurrentPage = <PassengerIndex switchPage={this.switchPage}/>
    }  
    if(this.state.currentPage === 'show'){
      CurrentPage = <PassengerShow switchPage={this.switchPage} id={this.state.id} />
    }
    return (
      <div>
        {CurrentPage}
      </div>
    );
  }
}

export default App;
