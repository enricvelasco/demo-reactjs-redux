import React, { Component } from 'react';
import SearchContainer from '../../containers/search-container';
import InfoContainer from '../../containers/info-container';
import './home.css';


class Home extends Component {
    render() {
        return (
            <div>
                <div>titulos principales</div>
                <div className={"flex-container"}>
                    <SearchContainer />
                    <InfoContainer />
                </div>
            </div>
        );
    }
}

export default Home;
