import React from 'react';
import {connect} from 'react-redux';
import './table-list.css';
import  Row from './rows';
import { actionShowDetails } from '../../../actions';

const columns = [
    {name:"Name", key:"name"},
    {name:"Gender", key:"gender"},
    {name:"Birth year", key:"birth_year"},
    {name:"Eye Color", key:"eye_color"},
    {name:"Otions", key:"options"}
]

const setColumns=(pCol)=>{
    return pCol.map((item) => {
        return <th key={item.key}>{item.name}</th>;
    });
};

const TableList = ({ list, actionShowDetails }) => {
    return(
        <table>
            <tbody>
            <tr>
                {setColumns(columns)}
            </tr>
                {list.searchResults.map((item) =>
                    <Row key={item.url}
                         row={item}
                         onClickShowDetails={ actionShowDetails } />)}
            </tbody>
        </table>
    )
};

const mapStateToProps = (state) => {
    return {
        list: state.list
    };
};

export default connect(mapStateToProps, { actionShowDetails }) (TableList);
