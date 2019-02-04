import React from 'react';
import Cart from '../../common/carts';
import {connect} from "react-redux";

const InfoContainer = ({list:{info}}) => {
    return (
        <Cart elementInfo={info}/>
    );
};

const mapStateToProps = (state) => {
    return {
        list: state.list
    };
};

export default connect(mapStateToProps, null) (InfoContainer);
