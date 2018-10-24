import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            kitties: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ kitties: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })


    }
    render() {
        const filteredKitties = this.state.kitties.filter(kitties => {
            return kitties.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc' >
                <h1>KittyRightMeow</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList kitties={filteredKitties} />
                </Scroll>
            </div>

        );
    }
}

export default App;