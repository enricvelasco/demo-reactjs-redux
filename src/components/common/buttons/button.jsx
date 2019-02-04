import React from 'react';

const BaseButton = ( { buttonName , onClickAction } ) => {
    return(
        <button type="button" onClick={(() => onClickAction())}>{ buttonName }</button>
    );
};

export default BaseButton;
