import React, { Component } from 'react';
import {connect} from "react-redux";
import TextInput from '../text-input';
import ButtonSearch from '../buttons';
import { ApiCall } from '../../../actions';

class Searcher extends Component {
    constructor(props){
        super(props);
        this.state = {textValue:""} ;
    }

    onTextChanged = (text) => {
        this.setState({textValue:text})
    };

    sendInfo = () => {
        const textToSend = this.state.textValue;
        this.setState({textValue:""});
        this.props.ApiCall(textToSend);
    };

    onSubmit = (e) =>{
        e.preventDefault();
        this.sendInfo();
    };

    render() {
        return (
            <form onSubmit={(e) => this.onSubmit(e)} autoComplete={"off"}>
                <TextInput xText={this.state.textValue} onChangeText={this.onTextChanged} />
                <ButtonSearch buttonName={"Search"} onClickAction={this.sendInfo} />
            </form>
        );
    }
}

export default connect(null, { ApiCall }) (Searcher);

