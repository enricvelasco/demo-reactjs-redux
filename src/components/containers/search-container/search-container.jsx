import React, { Component } from 'react';
import Searcher from '../../common/search-comp';
import TableList from '../../common/table-list';

class SearchContainer extends Component {
    render() {
        return (
            <div>
                <Searcher />
                <TableList />
            </div>
        );
    }
}

export default SearchContainer;
