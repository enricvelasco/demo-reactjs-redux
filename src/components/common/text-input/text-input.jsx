import React from 'react';

const TextInput = ( { xText, onChangeText}) => {
    return(
        <input
            type="text"
            value={xText}
            onChange={(e) => onChangeText(e.target.value)}
        />
    );
};

export default TextInput;
