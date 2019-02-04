import React from 'react';
import Button from '../../../common/buttons';

const Row  = ({row, onClickShowDetails, onClickSave}) => {
    return(
        <tr>
            <td>{row.name}</td>
            <td>{row.gender}</td>
            <td>{row.birth_year}</td>
            <td>{row.eye_color}</td>
            <td><Button
                buttonName={"Show Details"}
                onClickAction={ () => onClickShowDetails(row) } />
                {/*<Button buttonName={"Save"}
                        onClickAction={ () => onClickSave() } />*/}
            </td>
        </tr>
    )
};

export default Row;
