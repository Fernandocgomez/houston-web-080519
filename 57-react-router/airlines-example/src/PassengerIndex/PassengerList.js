import React from 'react';
import { PassengerCard } from './PassengerCard';

export class PassengerList extends React.Component {
    render() {
        return (
            <div>
                {this.props.passengers.map( passenger => (
                    <PassengerCard key={passenger.id} switchPage={this.props.switchPage} passenger={passenger}/>
                ))}
            </div>
        );
    }
}