import React from 'react';
import onLineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './Infobar.css';


const InfoBar = ({room}) => (
    <div className='infoBar'>
        <div className="leftInnerContainer">
            <img className='onlineIcon' alt='Online Icon' src={onLineIcon} />
            <h3> {room} </h3>
        </div>
        <div className='rightInnerContainer'>
            <a href='/'>
                <img src={closeIcon} alt='closeImage' />
            </a>
        </div>
    </div>
)

export default InfoBar;