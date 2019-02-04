import React from 'react';



const Cart = ({elementInfo}) => {
        return (
            elementInfo === null?
                <div>Select to show info</div>
            :
                <ul>
                    <li>{elementInfo.name}</li>
                    <li>{elementInfo.mass}</li>
                    <li>{elementInfo.hair_color}</li>
                    <li>{elementInfo.height}</li>
                    <li>{elementInfo.skin_color}</li>
                    <li>{elementInfo.eye_color}</li>
                    <li>{elementInfo.birth_year}</li>
                    <li>{elementInfo.gender}</li>
                </ul>

        );
};

export default Cart;
